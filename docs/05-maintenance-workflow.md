# 05 Maintenance Workflow

## 维护分工建议

建议按职责分工：

- 宣传部
  负责新闻稿、活动文案、封面图、公众号内容素材
- 运营部
  负责活动信息、日程、报名入口、现场照片整理
- 技术部
  负责网站结构、组件、部署、审核和发布

## HNUDAO 日常维护流程

### 普通内容更新

1. 在 `src/content/news/` 或 `src/content/activities/` 等目录新增 Markdown 文件
2. 把图片放入 `public/images/` 对应目录
3. 本地运行 `npm run dev`
4. 检查对应页面效果
5. 运行 `npm run build`
6. 提交 Git commit
7. 推送到 GitHub
8. 等待 Vercel 自动部署

### 页面结构或样式更新

1. 新建分支
2. 修改组件、页面或样式
3. 本地逐页检查
4. 执行 `npm run build`
5. 提交 PR
6. 查看 Vercel Preview
7. 审核通过后合并

## 宣传部如何提交新闻稿

推荐准备以下材料：

- 标题
- 摘要
- 正文
- 发布时间
- 分类
- 标签
- 封面图
- 如果实际发布在公众号，也提供对应文章链接

技术维护者只需要把这些内容写进 `src/content/news/*.md` 即可。

## 运营部如何提交活动信息

推荐准备以下材料：

- 活动名称
- 活动简介
- 开始时间和结束时间
- 地点
- 报名入口
- 封面图
- 对外发布链接

活动页当前采用“官网展示 + 外部跳转”的模式，因此活动链接很重要。

## 活动照片如何整理

- 原图统一归档到本地素材文件夹，不建议全部进仓库
- 仓库里只保留官网展示必要图片
- 每次活动至少准备 1 张封面图
- 上传前压缩图片尺寸和体积

## 图片压缩建议

- 横幅图优先使用 `webp` 或高质量 `jpg`
- 单张图片尽量控制在几百 KB 以内
- 不要直接上传手机原图
- 透明图标优先使用 `svg` 或透明 `png`

## 分支命名规范

推荐：

- `content/news-title`
- `content/activity-title`
- `content/project-title`
- `fix/navbar`
- `feat/homepage-update`

## Commit message 规范

推荐：

- `content: add new activity post`
- `content: update department intro`
- `fix: correct contact links`
- `feat: adjust homepage cta style`

## Pull Request 审核流程

1. 提交 PR
2. 等待 Vercel 生成 Preview
3. 检查以下内容：
   链接是否正确、图片是否显示、日期是否正确、手机端是否正常、文案是否适合公开展示
4. 审核通过后合并到 `main`

## 多人协作建议

- 宣传部尽量不要直接改组件结构
- 技术部尽量不要替宣传部臆造内容
- 运营部提供活动准确信息，避免前台出现错误地点或错误时间
- 所有对外内容上线前，至少要有 1 人复核

## 换届交接清单

- GitHub 仓库管理员权限
- Vercel 项目管理员权限
- 阿里云域名与 DNS 权限
- 正式域名
- 本地维护命令
- `README.md` 与 `docs/` 是否最新
- Logo、favicon、二维码图片是否为最新版本

## GitHub / Vercel / 阿里云权限管理建议

- 不要把唯一管理员权限交给单个人
- 优先使用协会长期可控邮箱
- 每次换届及时移除失效账号权限
- 如有 2FA 或短信验证，也要确保可交接
