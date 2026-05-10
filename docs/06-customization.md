# 06 Customization

## 多语言（i18n）相关

### 如何新增或修改翻译

翻译文件位于：

- `src/i18n/zh-CN.json` — 中文
- `src/i18n/en.json` — 英文

使用 `t("section.key")` 语法调用，如 `t("home.learnMore")`。

新增翻译时，两个文件都要更新，保持 key 一致。

### 如何新增英文页面

1. 在 `src/pages/en/` 下新增 `.astro` 文件（与中文页面对应）
2. 使用 `const locale = "en" as const` 硬编码语言
3. 使用 `t()` 调用获取翻译文本
4. 所有链接加 `/en/` 前缀（如 `/en/about`）
5. 使用 locale-indexed 数据（如 `departments[locale]`）

### 如何为内容添加英文版

在同目录下新增 `.en.md` 后缀文件：

- 中文：`src/content/news/welcome.md`
- 英文：`src/content/news/welcome.en.md`

### 语言切换器

语言切换器组件位于 `src/components/LanguageSwitcher.astro`，已集成到 Header 导航栏。

### i18n 路由配置

在 `astro.config.mjs` 中：

```js
i18n: {
  defaultLocale: "zh-CN",
  locales: ["zh-CN", "en"],
  routing: { prefixDefaultLocale: false },
}
```

中文在根路径，英文在 `/en/` 前缀。

## 如何改网站名称和组织信息

主要修改文件：

- `src/lib/site.ts`

所有导出均为 `Record<Locale, T>` 格式，需同时更新中英文：

- `siteName`
- `siteShortName`
- `siteDescription`
- `organizationName`
- `slogan`
- `siteUrl`

## 如何改 GitHub、X 和联系方式

仍然修改：

- `src/lib/site.ts`

重点字段：

- `repositoryUrl`
- `socialLinks`
- `contactInfo`

当前微信公众号二维码图片是：

- `public/qrcode_for公众号.jpg`

如果公众号二维码更新，直接替换这个文件即可。

## 如何改 Logo 和 favicon

当前文件：

- `public/logo-placeholder.svg`
- `public/favicon.svg`

替换时建议：

- 保持路径不变
- 只替换文件内容

这样可以避免额外修改组件引用。

## 如何改首页模块

首页文件：

- `src/pages/index.astro`

首页当前主要由这些区域组成：

- Hero 首屏
- 首页简介
- Focus 区块
- 最新动态
- Join HNUDAO CTA

如果要调整首页结构，优先改这个文件。

## 如何改首页首屏

相关文件：

- `src/components/Hero.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

这些文件共同控制：

- 首屏 Logo
- 滚动过渡效果
- Scroll 按钮
- 顶栏随滚动的变化

## 如何改导航

导航项来自：

- `src/lib/site.ts` 的 `navItems`

头部组件在：

- `src/components/Header.astro`

如果只是增删导航项，只改 `navItems` 即可。

## 如何改页脚

页脚组件在：

- `src/components/Footer.astro`

其中这些配置来自：

- `src/lib/site.ts` 的 `footerLinks`
- `socialLinks`
- `contactInfo`

页脚里的公众号悬浮二维码逻辑也在 `Footer.astro`。

## 如何改颜色

主要位置：

- `src/styles/global.css`
- `tailwind.config.mjs`

当前全站主色基于：

- `#CD9870`
- `#9C0705`

如果只是微调，优先改 `global.css` 中的 CSS 变量。

## 如何改银杏叶或背景装饰

相关文件：

- `src/components/GinkgoLeaf.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

如果只改叶子图形，改 `GinkgoLeaf.astro`。
如果只改叶子出现位置、大小、颜色和透明度，改 `global.css`。

## 如何新增页面

1. 在 `src/pages/` 下新增 `.astro` 文件
2. 如需统一页头，优先复用 `ContentLayout`
3. 如需加入导航，再更新 `src/lib/site.ts`

## 如何新增部门

修改：

- `src/data/departments.ts`

新增一个部门对象即可。

## 如何更新成员数据

修改：

- `src/data/members.ts`

当前该文件默认是空数组。

如果之后要公开成员信息，建议只填写已经确认可公开的成员资料。

## 如何替换默认占位图

默认占位图文件：

- `public/images/placeholder-cover.svg`

如果要全站统一换成新的默认图，可以直接替换这个文件。

如果只想改某篇内容的封面，直接修改对应 Markdown frontmatter 的 `cover` 字段。
