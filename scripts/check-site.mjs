#!/usr/bin/env node
/**
 * 零依赖站点自检（构建后运行）：npm run check
 *  1. 静态检查 i18n：中英键是否一一对应、代码里 t() 用到的键是否存在、有没有已无人引用的死键
 *  2. 检查 dist 产物：站内链接与图片是否都能落到实际文件、页面里有没有漏翻的 i18n 键（t() 找不到键时会直接输出键名）
 * 退出码非 0 表示发现问题，可直接接进 CI。
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const root = process.cwd();
const problems = [];
const notes = [];

// ---------- 1. i18n 静态检查 ----------
const locales = ["zh-CN", "en"];
const dicts = Object.fromEntries(
  locales.map((l) => [l, JSON.parse(readFileSync(join(root, "src", "i18n", `${l}.json`), "utf8"))]),
);

function flatten(obj, prefix = "") {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object") out.push(...flatten(v, key));
    else out.push(key);
  }
  return out;
}

const keys = Object.fromEntries(locales.map((l) => [l, new Set(flatten(dicts[l]))]));
for (const key of keys[locales[0]]) {
  for (const l of locales.slice(1)) {
    if (!keys[l].has(key)) problems.push(`i18n: ${l} 缺少键 ${key}（${locales[0]} 有）`);
  }
}
for (const l of locales.slice(1)) {
  for (const key of keys[l]) {
    if (!keys[locales[0]].has(key)) problems.push(`i18n: ${locales[0]} 缺少键 ${key}（${l} 有）`);
  }
}

function walkFiles(dir, exts) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walkFiles(p, exts));
    else if (exts.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

const srcFiles = walkFiles(join(root, "src"), [".astro", ".ts", ".tsx", ".js", ".md", ".mdx"]).filter(
  (f) => !f.includes(join("src", "i18n")),
);
const srcText = srcFiles.map((f) => readFileSync(f, "utf8")).join("\n");
const used = new Set([...srcText.matchAll(/\bt\(\s*"([^"]+)"/g)].map((m) => m[1]));
if (/\bt\(\s*`/.test(srcText)) notes.push("i18n: 检测到动态拼接的 t(`...`)，死键判断可能不完整");

for (const l of locales) {
  for (const key of keys[l]) {
    if (!used.has(key)) problems.push(`i18n: ${l} 的键无人引用（死键）-> ${key}`);
  }
}
for (const key of used) {
  if (!keys[locales[0]].has(key)) problems.push(`i18n: 代码里用到但字典里没有 -> t("${key}")`);
}

// ---------- 2. dist 产物检查 ----------
const dist = join(root, "dist");
if (!existsSync(dist)) {
  notes.push("dist 不存在，已跳过产物检查（先 npm run build）");
} else {
  const htmlFiles = walkFiles(dist, [".html"]);
  const resolveInternal = (url) => {
    const clean = url.split("#")[0].split("?")[0];
    if (!clean.startsWith("/")) return null;
    const target = join(dist, clean);
    const candidates = clean.endsWith("/") || clean === "/"
      ? [join(target, "index.html")]
      : [target, `${target}.html`, join(target, "index.html")];
    return candidates.find((c) => existsSync(c)) ? true : candidates;
  };
  const looksLikeKey = (text) => /^[a-z][a-zA-Z0-9]*(\.[a-zA-Z0-9]+){1,3}$/.test(text) && !text.includes("...");

  for (const file of htmlFiles) {
    const html = readFileSync(file, "utf8");
    const rel = relative(dist, file);
    for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
      const res = resolveInternal(m[1]);
      if (Array.isArray(res)) problems.push(`链接: ${rel} 指向不存在的文件 -> ${m[1]}`);
    }
    for (const m of html.matchAll(/>([^<>{}]{3,60})</g)) {
      const text = m[1].trim();
      if (looksLikeKey(text)) problems.push(`i18n 泄漏: ${rel} 页面里显示了键名 -> ${text}`);
    }
  }
  notes.push(`已检查 ${htmlFiles.length} 个 HTML 产物`);
}

// ---------- 输出 ----------
for (const n of notes) console.log(`· ${n}`);
if (problems.length === 0) {
  console.log("✓ 自检通过：i18n 与站内链接均无问题");
  process.exit(0);
}
console.error(`\n✗ 发现 ${problems.length} 个问题：`);
for (const p of problems) console.error(`  - ${p}`);
process.exit(1);
