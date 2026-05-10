import type { Locale } from "@/lib/i18n";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timelineItems: Record<Locale, TimelineItem[]> = {
  "zh-CN": [
    {
      year: "2026",
      title: "HNUDAO 官网上线",
      description: "协会官网完成首版公开发布，开始统一承载组织介绍、活动入口与项目展示。",
    },
    {
      year: "持续更新",
      title: "内容与活动逐步完善",
      description: "后续新闻、活动、项目、成员与公开资料将由协会持续更新维护。",
    },
  ],
  en: [
    {
      year: "2026",
      title: "HNUDAO Website Launched",
      description: "The official website completed its first public release, beginning to unify organization introduction, event entries, and project showcase.",
    },
    {
      year: "Ongoing",
      title: "Content & Activities Improving",
      description: "News, activities, projects, members, and public resources will be continuously updated and maintained by the association.",
    },
  ],
};
