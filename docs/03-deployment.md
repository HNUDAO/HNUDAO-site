# 03 Deployment

## 当前部署方式

当前项目是 Astro 静态站点，推荐部署方式：

- 代码托管在 GitHub
- 站点托管在 Vercel
- 正式分支使用 `main`
- 预览环境使用分支或 Pull Request

## 部署前本地检查

在推送前，先在本地执行：

```bash
npm run build
```

如果构建通过，再考虑推送。

如果构建异常，可以先尝试清理缓存：

```bash
Remove-Item -LiteralPath .astro -Recurse -Force
Remove-Item -LiteralPath dist -Recurse -Force
npm run build
```

如果你使用的是 macOS 或 Linux：

```bash
rm -rf .astro dist
npm run build
```

## 推送到 GitHub

推荐分支流程：

```bash
git checkout -b content/add-open-sharing-post
git add .
git commit -m "content: add open sharing post"
git push origin content/add-open-sharing-post
```

如果已经审核通过，再合并到 `main`。

## 如何导入到 Vercel

1. 登录 Vercel。
2. 选择 `Add New Project`。
3. 选择 GitHub 仓库。
4. 导入当前 HNUDAO 官网仓库。
5. 让 Vercel 自动识别 Astro 项目。
6. 构建命令保持默认，通常就是：
   `astro build`
7. 输出目录通常由 Astro 自动识别，不需要额外设置。

## 推荐的 Vercel 设置

- Production Branch：
  `main`
- Build Command：
  默认即可
- Output Directory：
  默认即可
- Node.js Version：
  建议与本地一致，使用 `20.x` 或更高

## Vercel 自动部署逻辑

- 推送到 `main`
  自动触发正式环境部署
- 推送到其他分支或提交 Pull Request
  自动生成预览环境部署

## 推荐团队流程

### 普通内容更新

1. 新建分支
2. 修改 Markdown 或配置文件
3. 本地运行 `npm run build`
4. 推送分支
5. 查看 Vercel Preview
6. 合并到 `main`
7. Vercel 自动发布正式站点

### 紧急热修

如果只是极小范围修正，并且由负责人直接处理：

1. `git checkout main`
2. `git pull origin main`
3. 修改内容
4. `npm run build`
5. `git add .`
6. `git commit -m "fix: correct homepage link"`
7. `git push origin main`

## 如何查看构建日志

在 Vercel 项目中：

1. 打开对应部署记录
2. 查看 `Build Logs`
3. 判断问题属于哪类：
   frontmatter 错误、图片路径错误、依赖错误、Astro 配置错误、运行时脚本错误

## 如何回滚

可选方式有两种：

### 方式一：Vercel 控制台回滚

1. 打开历史部署记录
2. 找到最近一个稳定版本
3. 重新 Promote 为正式版本

### 方式二：Git 回退后重新部署

1. 在 GitHub 找到稳定 commit
2. 回退到该版本
3. 重新推送
4. 等待 Vercel 自动构建

## 正式域名上线前要检查什么

- `astro.config.mjs` 的 `site` 是否已改成正式域名
- `src/lib/site.ts` 的 GitHub、X、联系方式是否正确
- `public/favicon.svg` 是否为正式图标
- `public/logo-placeholder.svg` 是否为正式 Logo
- `public/wechat-qrcode.jpg` 是否为最新公众号二维码
- 是否仍存在不该公开的测试文案或临时链接

## 换届时如何交接 Vercel 权限

- 至少保留 2 名长期负责人有管理员权限
- 使用协会长期可控邮箱管理核心账号
- 交接时记录：
  项目名、正式域名、Vercel Team、Production Branch、管理员列表
- 毕业或离任成员应及时移除权限
