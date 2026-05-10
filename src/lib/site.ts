import type { Locale } from "./i18n";

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
export const siteUrl = "https://example.com";
export const repositoryUrl = "https://github.com/HNUDAO";
export const defaultOgImage = "/images/placeholder-cover.svg";

export const siteDescription: Record<Locale, string> = {
  "zh-CN": "HNUDAO 是河南师范大学区块链协会，致力于连接区块链学习、技术实践、开源协作与校园交流。",
  en: "HNUDAO is the Blockchain Association at Henan Normal University, dedicated to connecting blockchain learning, technical practice, open-source collaboration, and campus exchange.",
};

export const organizationName: Record<Locale, string> = {
  "zh-CN": "河南师范大学区块链协会",
  en: "HNU Blockchain Association",
};

export const englishOrganizationName = "HNUDAO · HNU Blockchain Association";

export const slogan: Record<Locale, string> = {
  "zh-CN": "连接学习、研究与实践的校园区块链社区",
  en: "Connecting Technology, Research and Practice",
};

export const navItems: Record<Locale, NavItem[]> = {
  "zh-CN": [
    { label: "首页", href: "/" },
    { label: "关于协会", href: "/about" },
    { label: "成员风采", href: "/members" },
    { label: "动态资讯", href: "/news" },
    { label: "项目展示", href: "/projects" },
    { label: "加入我们", href: "/join" },
    { label: "联系我们", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/en/" },
    { label: "About", href: "/en/about" },
    { label: "Members", href: "/en/members" },
    { label: "News", href: "/en/news" },
    { label: "Projects", href: "/en/projects" },
    { label: "Join Us", href: "/en/join" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export const quickLinks: Record<Locale, QuickLink[]> = {
  "zh-CN": [
    { title: "新闻动态", description: "发布协会更新、活动回顾、招新说明与对外公告。", href: "/news" },
    { title: "活动中心", description: "集中查看公开分享、工作坊、社群活动与学期安排。", href: "/activities" },
    { title: "项目展示", description: "展示协会项目、开源尝试与适合长期沉淀的实践成果。", href: "/projects" },
    { title: "加入我们", description: "了解协会方向、参与方式、招新流程与常见问题。", href: "/join" },
    { title: "赞助我们", description: "查看 HNUDAO 的链上赞助地址，支持协会活动、内容与项目建设。", href: "/sponsor" },
  ],
  en: [
    { title: "News", description: "Association updates, event reviews, recruitment info, and announcements.", href: "/en/news" },
    { title: "Activities", description: "Public sharing, workshops, community events, and semester schedules.", href: "/en/activities" },
    { title: "Projects", description: "Association projects, open-source experiments, and long-term outcomes.", href: "/en/projects" },
    { title: "Join Us", description: "Learn about the association, participation methods, and recruitment process.", href: "/en/join" },
    { title: "Sponsor", description: "View HNUDAO's on-chain sponsor addresses to support our activities.", href: "/en/sponsor" },
  ],
};

export const socialLinks: Record<Locale, SocialLink[]> = {
  "zh-CN": [
    { label: "邮箱", href: "mailto:contact@hnudao.cn", platform: "email" },
    { label: "GitHub", href: "https://github.com/HNUDAO", platform: "github" },
    { label: "X", href: "https://x.com/HNUBlockchain", platform: "x" },
    { label: "Telegram", href: "https://t.me/+krLRGRCmEoxjNjFh", platform: "telegram" },
    { label: "微信公众号", href: "#", platform: "wechat" },
  ],
  en: [
    { label: "Email", href: "mailto:contact@hnudao.cn", platform: "email" },
    { label: "GitHub", href: "https://github.com/HNUDAO", platform: "github" },
    { label: "X", href: "https://x.com/HNUBlockchain", platform: "x" },
    { label: "Telegram", href: "https://t.me/+krLRGRCmEoxjNjFh", platform: "telegram" },
    { label: "WeChat", href: "#", platform: "wechat" },
  ],
};

export const contactInfo: Record<Locale, Record<string, string>> = {
  "zh-CN": {
    email: "contact@hnudao.cn",
    wechatOfficial: "悬停公众号图标即可查看二维码",
    qqGroup: "QQ群将在招新季或公开活动期间开放",
    telegramGroup: "https://t.me/+krLRGRCmEoxjNjFh",
    github: "https://github.com/HNUDAO",
    x: "https://x.com/HNUBlockchain",
    address: "中国大陆河南省新乡市建设东路46号河南师范大学",
    principal: "烦请先通过邮件联系",
  },
  en: {
    email: "contact@hnudao.cn",
    wechatOfficial: "Hover over the WeChat icon to view QR code",
    qqGroup: "QQ group will open during recruitment or public events",
    telegramGroup: "https://t.me/+krLRGRCmEoxjNjFh",
    github: "https://github.com/HNUDAO",
    x: "https://x.com/HNUBlockchain",
    address: "Henan Normal University, 46 Jianshe East Road, Xinxiang, China",
    principal: "Please contact via email first",
  },
};

export const footerLinks: Record<Locale, FooterGroup[]> = {
  "zh-CN": [
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
  ],
  en: [
    {
      title: "Navigation",
      items: [
        { label: "Home", href: "/en/" },
        { label: "About", href: "/en/about" },
        { label: "Join Us", href: "/en/join" },
        { label: "Sponsor", href: "/en/sponsor" },
        { label: "Contact", href: "/en/contact" },
      ],
    },
    {
      title: "Content",
      items: [
        { label: "News", href: "/en/news" },
        { label: "Activities", href: "/en/activities" },
        { label: "Projects", href: "/en/projects" },
        { label: "Members", href: "/en/members" },
      ],
    },
  ],
};
