# HNUDAO 官网维护文档

## 文档用途

这套文档用于帮助 HNUDAO 官网维护者完成以下工作：

- 本地运行与调试网站
- 新增或修改新闻、活动、项目内容
- 更新首页、导航、页脚、联系方式与社交平台
- 部署到 Vercel
- 绑定阿里云域名
- 在换届时完成账号、权限和项目交接

## 适合阅读对象

- 技术负责人
- 官网维护者
- 宣传部内容维护同学
- 运营部活动维护同学
- 换届后的下一任站点负责人

## 阅读顺序

建议第一次接手项目时按这个顺序阅读：

1. `README.md`
2. `docs/01-getting-started.md`
3. `docs/02-content-guide.md`
4. `docs/03-deployment.md`
5. `docs/05-maintenance-workflow.md`

如果你只需要修改站点外观或结构，再补充阅读：

1. `docs/06-customization.md`
2. `docs/07-troubleshooting.md`

## 文档目录

- `docs/README.md`
  文档总览与阅读建议。
- `docs/01-getting-started.md`
  本地环境准备、安装依赖、启动开发、构建与预览。
- `docs/02-content-guide.md`
  如何新增新闻、活动、项目，如何放图片，如何写 frontmatter。
- `docs/03-deployment.md`
  GitHub、Vercel、正式环境与预览环境的部署流程。
- `docs/04-domain-dns.md`
  阿里云域名解析到 Vercel 的常见配置与风险说明。
- `docs/05-maintenance-workflow.md`
  多人协作、PR 审核、分支命名、图片整理与换届交接。
- `docs/06-customization.md`
  如何修改站点名称、Logo、导航、联系方式、颜色与页面结构。
- `docs/07-troubleshooting.md`
  构建失败、图片不显示、二维码不显示、Vercel 构建失败等排查方法。

## 当前站点维护特点

- 网站是 Astro 静态站点，没有数据库，也没有后台。
- 内容主要由 `src/content/` 下的 Markdown 文件驱动。
- 部门、成员、站点名称、导航、联系方式等信息由 `src/data/` 和 `src/lib/site.ts` 驱动。
- 新闻、活动、项目卡片以“官网展示 + 外部链接跳转”为主，不在站内展开详情页。
- 微信公众号二维码图片位于 `public/qrcode_for公众号.jpg`，当前通过页脚和联系页的公众号图标悬浮展示。

## 日常维护建议

- 简单内容更新优先改 Markdown 或 `src/lib/site.ts`，不要把纯文案改动做成复杂代码修改。
- 每次提交前至少执行一次 `npm run build`。
- 修改过 `src/content/`、`src/data/`、`src/lib/site.ts`、`src/components/` 后，都要本地看一遍页面。
- 不要编造真实成员、真实联系方式或未公开信息。
- 所有对外链接优先确认可公开访问再发布。
- 换届时必须同步交接 GitHub、Vercel 和域名控制权。

## 技术负责人交接说明

- 交接时至少同步以下信息：
  `GitHub` 仓库权限、`Vercel` 项目权限、域名注册与 DNS 权限。
- 交接时应现场演示一次：
  `npm run dev`、新增一篇新闻、`npm run build`、推送 GitHub、查看 Vercel 部署。
- 交接时重点确认以下文件是否仍与现状一致：
  `README.md`、`docs/`、`src/lib/site.ts`、`src/content/`。
