# 02 Content Guide

## 当前内容维护方式

站点内容分为两类：

- Markdown 内容
  放在 `src/content/`，用于新闻、活动、项目、通知。
- 配置型内容
  放在 `src/lib/site.ts`、`src/data/departments.ts`、`src/data/members.ts`、`src/data/timeline.ts`。

站点支持中文（默认）和英文两种语言。配置型数据使用 `Record<Locale, T>` 格式，Markdown 内容通过文件名后缀区分语言。

## 多语言内容规则

### Markdown 内容（新闻、活动、项目、通知）

- 中文版：`src/content/news/welcome.md`（无后缀）
- 英文版：`src/content/news/welcome.en.md`（`.en.md` 后缀）
- 系统通过 `filterByLocale()` 自动按语言过滤内容
- 中文页面只显示无后缀文件，英文页面只显示 `.en.md` 文件

### 配置型数据（部门、成员、时间线、站点信息）

所有导出均为 `Record<Locale, T>` 格式：

```ts
export const departments: Record<Locale, Department[]> = {
  "zh-CN": [/* 中文部门数据 */],
  en: [/* 英文部门数据 */],
};
```

更新时必须同时更新中英文版本。

### 翻译文件（UI 文本）

- `src/i18n/zh-CN.json` — 中文 UI 文本
- `src/i18n/en.json` — 英文 UI 文本

使用 `t("key.subkey")` 调用，如 `t("home.learnMore")`。

## 如何新增新闻

1. 在 `src/content/news/` 下新建一个 Markdown 文件。
2. 填写 frontmatter。
3. 编写正文内容。
4. 如果有封面图，把图片放到 `public/images/news/`。
5. 如果新闻实际发布在公众号或其他平台，把外部链接写到 `externalUrl`。
6. 本地运行 `npm run dev` 检查 `/news` 和首页卡片。
7. 提交代码并推送。

## 如何新增活动

1. 在 `src/content/activities/` 下新建 Markdown 文件。
2. 填写活动标题、摘要、时间、地点、状态。
3. 如果有报名页，写入 `registrationUrl`。
4. 如果活动实际发布在公众号、问卷或第三方页面，也可以直接写到 `externalUrl`。
5. 把封面图放到 `public/images/activities/`。
6. 本地检查 `/activities` 页面和首页卡片。

## 如何新增项目

1. 在 `src/content/projects/` 下新建 Markdown 文件。
2. 填写标题、摘要、状态、标签。
3. 如果项目有仓库，填写 `repo`。
4. 如果项目有演示站，填写 `demo`。
5. 如果希望卡片优先跳转到某个公开页面，填写 `externalUrl`。
6. 把封面图放到 `public/images/projects/`。
7. 本地检查 `/projects` 页面和首页卡片。

## 如何新增通知

1. 在 `src/content/notices/` 下新建 Markdown 文件。
2. 按 `notices` schema 填写 frontmatter。
3. 当前前端还没有单独的通知列表页。
4. 如果后续要启用通知专区，可以再新增对应页面。

## 当前卡片跳转逻辑

新闻、活动、项目卡片的跳转优先级如下：

1. `externalUrl`
2. `registrationUrl`
3. `demo`
4. `repo`
5. `#`

这意味着：

- 如果你想让新闻卡片跳公众号文章，优先写 `externalUrl`
- 如果你想让活动卡片跳报名页，写 `registrationUrl` 或 `externalUrl`
- 如果你想让项目卡片跳 GitHub，写 `repo`

## frontmatter 字段说明

### news

- `title`
  标题
- `description`
  摘要
- `pubDate`
  发布时间
- `updatedDate`
  更新时间，可选
- `author`
  作者，可选
- `category`
  分类，可选
- `tags`
  标签数组
- `cover`
  封面图路径，可选
- `externalUrl`
  外部链接，可选
- `featured`
  是否作为精选内容展示
- `draft`
  是否隐藏

### activities

- `title`
  活动标题
- `description`
  摘要
- `startDate`
  开始时间
- `endDate`
  结束时间，可选
- `location`
  地点，可选
- `status`
  `upcoming`、`ongoing`、`past`
- `category`
  分类，可选
- `tags`
  标签数组
- `cover`
  封面图路径，可选
- `registrationUrl`
  报名链接，可选
- `externalUrl`
  外部发布链接，可选
- `featured`
  是否精选
- `draft`
  是否隐藏

### projects

- `title`
  项目标题
- `description`
  摘要
- `date`
  项目日期，可选
- `status`
  `planning`、`active`、`archived`
- `tags`
  标签数组
- `cover`
  封面图路径，可选
- `repo`
  GitHub 仓库地址，可选
- `demo`
  演示地址，可选
- `externalUrl`
  外部地址，可选
- `featured`
  是否精选
- `draft`
  是否隐藏

### notices

- `title`
  通知标题
- `description`
  通知摘要，可选
- `pubDate`
  发布时间
- `category`
  分类，可选
- `externalUrl`
  外部链接，可选
- `important`
  是否重要通知
- `draft`
  是否隐藏

## Markdown 示例

### 新增新闻示例

```md
---
title: "HNUDAO 新学期公开分享预告"
description: "本学期首场公开分享活动即将开启，后续将通过官方渠道公布具体安排。"
pubDate: 2026-09-10
author: "HNUDAO"
category: "协会动态"
tags: ["活动预告", "公开分享"]
cover: "/images/news/2026-open-sharing.jpg"
externalUrl: "https://mp.weixin.qq.com/xxxx"
featured: true
draft: false
---

这里写正文内容。
```

### 新增活动示例

```md
---
title: "区块链基础公开分享"
description: "面向校内同学的开放活动，欢迎对区块链与 Web3 感兴趣的同学参加。"
startDate: 2026-09-18
endDate: 2026-09-18
location: "河南师范大学校内，具体地点以后续通知为准"
status: "upcoming"
category: "公开分享"
tags: ["活动", "区块链"]
cover: "/images/activities/blockchain-sharing.jpg"
registrationUrl: "https://wj.qq.com/xxxx"
featured: true
draft: false
---

这里写活动介绍。
```

### 新增项目示例

```md
---
title: "HNUDAO 开源工具箱"
description: "用于沉淀协会在学习、协作和活动组织中的轻量工具。"
date: 2026-09-12
status: "active"
tags: ["开源", "工具"]
cover: "/images/projects/toolbox-cover.jpg"
repo: "https://github.com/HNUDAO"
featured: false
draft: false
---

这里写项目介绍。
```

## 图片放在哪里

- 新闻图片：
  `public/images/news/`
- 活动图片：
  `public/images/activities/`
- 项目图片：
  `public/images/projects/`
- 成员头像：
  `public/images/members/`

## 图片命名规范

建议全部使用：

- 小写英文字母
- 短横线
- 可读的日期或主题名

示例：

- `2026-spring-sharing-cover.jpg`
- `web3-reading-group.webp`
- `project-toolbox-homepage.png`

不要使用：

- 空格
- 中文文件名
- `截图(1).png` 这类混乱命名

## 如何插入图片

在 Markdown 正文中直接写：

```md
![活动海报](/images/activities/blockchain-sharing.jpg)
```

## 如何设置 featured

- `featured: true`
  表示该内容更容易进入首页或列表页精选区域
- `featured: false`
  表示普通展示

## 如何设置 draft

- `draft: true`
  表示不发布
- `draft: false`
  表示正常发布

## 发布时间怎么写

统一使用：

```yaml
pubDate: 2026-09-10
```

活动时间同理：

```yaml
startDate: 2026-09-18
endDate: 2026-09-18
```

## 修改公众号二维码

当前微信公众号二维码图片文件是：

`public/wechat-qrcode.jpg`

如果公众号二维码更新，直接替换这张图片，保持文件名不变即可。

这样联系页「微信公众号」卡片里的二维码会自动使用新图片。
