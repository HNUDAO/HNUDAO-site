export type NavItem = {
  label: string;
  href: string;
};

export type QuickLink = {
  title: string;
  description: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  platform: "github" | "x" | "wechat" | "email" | "telegram";
};

export type FooterGroup = {
  title: string;
  items: NavItem[];
};

export const siteName = "HNUDAO";
export const siteShortName = "HNUDAO";
export const siteDescription =
  "HNUDAO 是河南师范大学区块链协会，致力于连接区块链学习、技术实践、开源协作与校园交流。";
export const siteUrl = "https://example.com";
export const repositoryUrl = "https://github.com/HNUDAO";
export const organizationName = "河南师范大学区块链协会";
export const englishOrganizationName = "HNUDAO · HNU Blockchain Association";
export const slogan = "连接学习、研究与实践的校园区块链社区";
export const sloganEn = "Connecting Technology, Research and Practice";
export const defaultOgImage = "/images/placeholder-cover.svg";

export const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "关于协会", href: "/about" },
  { label: "成员风采", href: "/members" },
  { label: "动态资讯", href: "/news" },
  { label: "项目展示", href: "/projects" },
  { label: "加入我们", href: "/join" },
  { label: "联系我们", href: "/contact" },
];

export const quickLinks: QuickLink[] = [
  {
    title: "新闻动态",
    description: "发布协会更新、活动回顾、招新说明与对外公告。",
    href: "/news",
  },
  {
    title: "活动中心",
    description: "集中查看公开分享、工作坊、社群活动与学期安排。",
    href: "/activities",
  },
  {
    title: "项目展示",
    description: "展示协会项目、开源尝试与适合长期沉淀的实践成果。",
    href: "/projects",
  },
  {
    title: "加入我们",
    description: "了解协会方向、参与方式、招新流程与常见问题。",
    href: "/join",
  },
  {
    title: "赞助我们",
    description: "查看 HNUDAO 的链上赞助地址，支持协会活动、内容与项目建设。",
    href: "/sponsor",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "邮箱", href: "mailto:contact@hnudao.cn", platform: "email" },
  { label: "GitHub", href: "https://github.com/HNUDAO", platform: "github" },
  { label: "X", href: "https://x.com/HNUBlockchain", platform: "x" },
  { label: "Telegram", href: "https://t.me/+krLRGRCmEoxjNjFh", platform: "telegram" },
  { label: "微信公众号", href: "#", platform: "wechat" },
];

export const contactInfo = {
  email: "contact@hnudao.cn",
  wechatOfficial: "悬停公众号图标即可查看二维码",
  qqGroup: "QQ群将在招新季或公开活动期间开放",
  telegramGroup: "https://t.me/+krLRGRCmEoxjNjFh",
  github: "https://github.com/HNUDAO",
  x: "https://x.com/HNUBlockchain",
  address: "中国大陆河南省新乡市建设东路46号河南师范大学",
  principal: "烦请先通过邮件联系",
};

export const footerLinks: FooterGroup[] = [
  {
    title: "站点导航",
    items: [
      { label: "首页", href: "/" },
      { label: "关于协会", href: "/about" },
      { label: "加入我们", href: "/join" },
      { label: "赞助我们", href: "/sponsor" },
      { label: "联系我们", href: "/contact" },
    ],
  },
  {
    title: "内容板块",
    items: [
      { label: "新闻动态", href: "/news" },
      { label: "活动中心", href: "/activities" },
      { label: "项目展示", href: "/projects" },
      { label: "成员风采", href: "/members" },
    ],
  },
];
