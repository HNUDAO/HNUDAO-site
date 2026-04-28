# HNUDAO 官网项目

这是 HNUDAO 的静态官网项目，面向河南师范大学区块链协会的长期对外展示与内容维护场景搭建。

当前项目已经具备完整页面结构、内容集合、部署配置和维护文档，可以直接本地运行、构建，并部署到 Vercel。站点中的主要文案已经切换为面向公众的初版内容，后续仍建议由协会成员继续根据实际情况调整。

## 项目简介

HNUDAO 官网不是学校门户，也不是单页宣传页，而是一个可持续维护的高校区块链协会官网。当前站点主要承载以下内容：

- 协会介绍与组织文化
- 部门方向与公开说明
- 新闻动态与活动入口
- 项目展示与开源链接
- 加入我们与官方联系渠道

## 当前维护特点

- 站点基于 Astro 静态生成，没有数据库，没有后端，没有登录系统。
- 新闻、活动、项目内容主要通过 Markdown 维护。
- 部门、成员、导航、联系方式与社交链接通过配置文件维护。
- 新闻、活动、项目卡片以“官网展示 + 外部平台跳转”为主。
- 微信公众号二维码图片当前位于 `public/qrcode_for公众号.jpg`。

## 当前对外渠道

- GitHub：
  `https://github.com/HNUDAO`
- X：
  `https://x.com/HNUBlockchain`
- 微信公众号：
  通过页脚和联系页公众号图标悬浮查看二维码

## 技术栈

- Astro
- TypeScript
- Tailwind CSS
- Markdown / MDX
- Astro Content Collections
- 静态站点输出
- Vercel 部署

## 页面结构

- `/`
  首页
- `/about`
  关于协会
- `/departments`
  部门介绍
- `/members`
  成员风采
- `/news`
  新闻动态
- `/activities`
  活动中心
- `/projects`
  项目展示
- `/join`
  加入我们
- `/contact`
  联系我们
- `/404`
  自定义 404 页面

## 目录结构

```text
.
├── docs/                     # 维护文档
├── public/                   # 静态资源
│   ├── favicon.svg
│   ├── logo-placeholder.svg
│   ├── qrcode_for公众号.jpg
│   └── images/
├── src/
│   ├── components/           # 复用组件
│   ├── content/              # 新闻、活动、项目、通知 Markdown
│   ├── data/                 # 部门、成员、时间线等结构化数据
│   ├── layouts/              # 页面布局
│   ├── lib/                  # 站点配置与工具函数
│   ├── pages/                # 路由页面
│   ├── styles/               # 全局样式
│   └── content.config.ts     # Content Collections schema
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## 本地开发

建议 Node.js 版本：

- `20.x` 或更高

安装依赖：

```bash
npm install
```

启动开发：

```bash
npm run dev
```

构建：

```bash
npm run build
```

预览：

```bash
npm run preview
```

本项目也保留了：

```bash
npm start
```

它等价于 `npm run preview`。

如果你使用 `pnpm`：

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## 内容更新

最常见的内容更新方式：

1. 在 `src/content/news/`、`src/content/activities/`、`src/content/projects/` 中新增 Markdown 文件
2. 把图片放到 `public/images/` 对应目录
3. 本地运行 `npm run dev`
4. 检查页面效果
5. 运行 `npm run build`
6. 提交代码并推送到 GitHub
7. 等待 Vercel 自动部署

## 配置更新

以下内容通常不需要改组件代码，直接修改配置即可：

- 站点名称、组织名称、描述、导航：
  `src/lib/site.ts`
- 社交链接与联系方式：
  `src/lib/site.ts`
- 部门内容：
  `src/data/departments.ts`
- 成员内容：
  `src/data/members.ts`
- 时间线：
  `src/data/timeline.ts`

## 部署方式

推荐方案：

- GitHub 托管代码
- Vercel 托管站点
- `main` 分支作为正式环境
- 分支或 PR 作为预览环境

本地部署前检查：

```bash
npm run build
```

如果构建缓存异常，可清理：

Windows PowerShell：

```powershell
Remove-Item -LiteralPath .astro -Recurse -Force
Remove-Item -LiteralPath dist -Recurse -Force
npm run build
```

macOS / Linux：

```bash
rm -rf .astro dist
npm run build
```

## 域名配置

推荐使用阿里云域名 + Vercel 托管：

- 根域名 `@` 通常配置为 Vercel 提示的 `A` 记录
- `www` 通常配置为 Vercel 提示的 `CNAME`
- HTTPS 证书通常由 Vercel 自动签发

详细说明见：

- `docs/04-domain-dns.md`

## 维护文档入口

建议维护者优先阅读：

- [docs/README.md](docs/README.md)
- [docs/01-getting-started.md](docs/01-getting-started.md)
- [docs/02-content-guide.md](docs/02-content-guide.md)
- [docs/03-deployment.md](docs/03-deployment.md)
- [docs/05-maintenance-workflow.md](docs/05-maintenance-workflow.md)

## 贡献流程

推荐流程：

1. 从 `main` 新建分支
2. 修改内容或代码
3. 本地运行 `npm run build`
4. 提交 Pull Request
5. 查看 Vercel Preview
6. 审核通过后合并到 `main`
7. Vercel 自动发布正式站点

## 常见命令

```bash
npm install
npm run dev
npm run build
npm run preview
npm start
```

## 后续建议继续补充的真实内容

- 协会正式介绍与公开版本愿景、使命
- 更具体的学期活动安排
- 真实项目成果链接
- 已授权公开的成员资料
- 正式域名与正式对外邮箱
- 更稳定的对外发布节奏

## 说明

这是 HNUDAO 官网项目，不代表河南师范大学官方主站，也不应被设计成学校门户站。

站点中的成员、联系方式、活动和项目内容应始终以“可公开、可核实、已授权”为前提进行维护。
