# 07 Troubleshooting

## `npm install` 或 `pnpm install` 失败

优先检查：

- Node.js 版本是否过低
- 网络是否正常
- 是否存在损坏缓存

可尝试：

```bash
npm cache clean --force
npm install
```

如果是 `pnpm`：

```bash
pnpm store prune
pnpm install
```

## `npm run dev` 启动失败

优先检查：

- 依赖是否完整安装
- 端口是否被占用
- 最近是否改坏了 `astro.config.mjs`
- 最近是否改坏了 `src/content.config.ts`

## 本地页面样式异常或内容没更新

先尝试清理缓存再重启：

Windows PowerShell：

```powershell
Remove-Item -LiteralPath .astro -Recurse -Force
Remove-Item -LiteralPath dist -Recurse -Force
npm run dev
```

macOS / Linux：

```bash
rm -rf .astro dist
npm run dev
```

## `npm run build` 失败

优先检查：

- Markdown frontmatter 是否符合 schema
- 图片路径是否正确
- 最近是否改坏了组件
- 最近是否改坏了内容配置

建议先清理缓存再构建：

```bash
npm run build
```

如果异常持续，再尝试：

```bash
rm -rf .astro dist
npm run build
```

或 Windows：

```powershell
Remove-Item -LiteralPath .astro -Recurse -Force
Remove-Item -LiteralPath dist -Recurse -Force
npm run build
```

## Markdown 页面不显示

检查：

- 文件是否放在正确目录
- frontmatter 字段是否齐全
- `draft` 是否写成了 `true`
- `category`、`tags`、`status` 是否写错

## Content Collections schema 报错

检查：

- 日期格式是否正确
- `status` 是否在允许值内
- `featured`、`draft` 是否为 `true` 或 `false`
- frontmatter 字段名是否拼写正确

## 图片不显示

检查：

- 图片是否位于 `public/` 下
- 路径是否以 `/images/...` 开头
- 大小写是否一致
- 文件名是否包含空格或奇怪字符

## 微信公众号二维码不显示

检查：

- 文件是否存在：
  `public/wechat-qrcode.jpg`
- 文件名是否完全一致
- 是否误改了 `contact.astro` 中的图片路径

## GitHub 或 X 链接不对

检查：

- `src/lib/site.ts` 里的 `socialLinks`
- `src/lib/site.ts` 里的 `contactInfo`

当前预期链接：

- GitHub：
  `https://github.com/HNUDAO`
- X：
  `https://x.com/HNUBlockchain`

## 页面上的邮箱显示为 `[email protected]`

这是 Cloudflare 的「Scrape Shield → Email Address Obfuscation（电子邮件地址混淆）」在改写 HTML，不是代码问题，`src/lib/site.ts` 里的邮箱无需改动。Cloudflare 会在页面里注入脚本还原真实邮箱，脚本被浏览器拦截（如广告拦截插件）或者查看源码时，就会看到 `[email protected]`。

修复：Cloudflare 控制台 → 选择 `hnudao.cn` 域 → Scrape Shield → 关闭「Email Address Obfuscation」。

## Vercel 构建失败

优先在本地执行：

```bash
npm run build
```

如果本地都过不去，不要先修 Vercel，先把本地问题解决。

然后再查看 Vercel Build Logs，判断问题是：

- 依赖安装失败
- 内容 schema 报错
- 图片路径错误
- 代码语法错误

## 域名解析未生效

检查：

- 阿里云 DNS 是否已保存
- 记录值是否和 Vercel 提示一致
- 是否存在冲突记录
- 是否仍在等待 DNS 生效

## HTTPS 证书未签发

检查：

- 域名是否已成功绑定到 Vercel
- 解析是否正确
- 是否等待时间不够

## 国内访问慢

如果网站托管在 Vercel 或其他海外节点，国内访问速度不稳定属于常见现象。

如果后续需要更稳定的大陆访问体验，需要重新评估：

- 托管平台
- 是否备案
- 是否使用大陆 CDN

## Git 推送失败

检查：

- 是否有仓库权限
- GitHub 登录状态是否正常
- Token 或 SSH Key 是否失效
- 本地分支是否落后远程

## 不确定该改哪个文件

优先按这个顺序排查：

1. 改文案、导航、联系方式：
   `src/lib/site.ts`
2. 改新闻、活动、项目内容：
   `src/content/`
3. 改部门和成员：
   `src/data/`
4. 改页面结构：
   `src/pages/`
5. 改组件样式：
   `src/components/`
6. 改全站风格：
   `src/styles/global.css`
