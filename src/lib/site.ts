import type { Locale } from "./i18n";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  platform: "github" | "x" | "wechat" | "email";
};

export const siteName = "HNUDAO";
export const siteShortName = "HNUDAO";
export const siteUrl = "https://www.hnudao.cn";
export const defaultOgImage = "/images/placeholder-cover.svg";

export const siteDescription: Record<Locale, string> = {
  "zh-CN": "HNUDAO 是河南师范大学区块链协会，致力于连接区块链学习、技术实践、开源协作与校园交流。",
  en: "HNUDAO is the Blockchain Association at Henan Normal University, dedicated to connecting blockchain learning, technical practice, open-source collaboration, and campus exchange.",
};

export const organizationName: Record<Locale, string> = {
  "zh-CN": "河南师范大学区块链协会",
  en: "HNU Blockchain Association",
};

export const navItems: Record<Locale, NavItem[]> = {
  "zh-CN": [
    { label: "首页", href: "/" },
    { label: "关于协会", href: "/about" },
    { label: "成员风采", href: "/members" },
    { label: "动态资讯", href: "/news" },
    { label: "联系我们", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/en/" },
    { label: "About", href: "/en/about" },
    { label: "Members", href: "/en/members" },
    { label: "News", href: "/en/news" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export const socialLinks: Record<Locale, SocialLink[]> = {
  "zh-CN": [
    { label: "邮箱", href: "mailto:contact@hnudao.cn", platform: "email" },
    { label: "GitHub", href: "https://github.com/HNUDAO", platform: "github" },
    { label: "X", href: "https://x.com/HNUBlockchain", platform: "x" },
    { label: "微信公众号", href: "#", platform: "wechat" },
  ],
  en: [
    { label: "Email", href: "mailto:contact@hnudao.cn", platform: "email" },
    { label: "GitHub", href: "https://github.com/HNUDAO", platform: "github" },
    { label: "X", href: "https://x.com/HNUBlockchain", platform: "x" },
    { label: "WeChat", href: "#", platform: "wechat" },
  ],
};

export const contactInfo: Record<Locale, Record<string, string>> = {
  "zh-CN": {
    email: "contact@hnudao.cn",
    wechatName: "HNUDAO",
    github: "https://github.com/HNUDAO",
    x: "https://x.com/HNUBlockchain",
    address: "中国大陆河南省新乡市建设东路46号河南师范大学",
  },
  en: {
    email: "contact@hnudao.cn",
    wechatName: "HNUDAO",
    github: "https://github.com/HNUDAO",
    x: "https://x.com/HNUBlockchain",
    address: "Henan Normal University, 46 Jianshe East Road, Xinxiang, China",
  },
};

