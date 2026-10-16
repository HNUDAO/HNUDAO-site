# 01 Getting Started

## 本地环境准备

- 建议 Node.js 版本：`20.x` 或更高
- 包管理器优先：`pnpm`
- 如果没有安装 `pnpm`，使用 `npm` 也完全可以
- 操作系统支持：Windows、macOS、Linux

## 安装依赖

如果使用 `pnpm`：

```bash
pnpm install
```

如果使用 `npm`：

```bash
npm install
```

## 启动开发服务器

如果使用 `pnpm`：

```bash
pnpm dev
```

如果使用 `npm`：

```bash
npm run dev
```

默认本地地址通常是：

```text
http://localhost:4321
```

## 构建和预览

构建：

```bash
pnpm build
```

或：

```bash
npm run build
npm run check     # 自检 i18n 与站内链接（需先 build）
```

预览：

```bash
pnpm preview
```

或：

```bash
npm run preview
```

本项目也额外保留了：

```bash
npm start
```

它等价于 `npm run preview`。

## 常见命令

使用 `pnpm`：

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

使用 `npm`：

```bash
npm install
npm run dev
npm run build
npm run preview
npm start
```

## 第一次接手项目应该做什么

1. 阅读根目录 `README.md` 和 `docs/README.md`。
2. 安装依赖并运行 `npm run dev` 或 `pnpm dev`。
3. 浏览首页、关于、新闻、活动、项目、联系页，理解当前信息结构。
4. 打开 `src/lib/site.ts`，确认站点名称、说明、导航、社交链接、联系方式。
5. 打开 `src/content/`，查看新闻、活动、项目 Markdown 的写法。
6. 执行一次 `npm run build`，确认本地构建正常。
7. 确认自己拥有 GitHub 仓库与 Vercel 项目的必要权限。

## 当前项目里最常改的文件

- `src/lib/site.ts`
  站点名称、组织名称、描述、导航、社交链接、联系方式。
- `src/pages/index.astro`
  首页内容与模块组合。
- `src/content/news/*.md`
  新闻动态。
- `src/content/activities/*.md`
  活动中心。
- `src/content/projects/*.md`
  项目展示。
- `src/data/departments.ts`
  部门介绍。
- `src/data/members.ts`
  成员列表（指导老师 + 已获授权的学生成员）。

## 开始维护前建议先确认的事项

- `public/logo-placeholder.svg` 是否已经替换为正式 Logo
- `public/favicon.svg` 是否已经替换为正式 favicon
- `public/wechat-qrcode.jpg` 是否为最新二维码
- `src/lib/site.ts` 中 GitHub、X、公众号信息是否正确
- `astro.config.mjs` 中 `site` 是否已改成正式域名
