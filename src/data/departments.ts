import type { Locale } from "@/lib/i18n";

export type Department = {
  name: string;
  slug: string;
  description: string;
  responsibilities: string[];
  contact: string;
  membersCount: string;
  lead: string;
  tags: string[];
};

export const departments: Record<Locale, Department[]> = {
  "zh-CN": [
    {
      name: "技术部",
      slug: "tech",
      description: "负责官网、工具、项目协作与技术实践，是协会技术能力建设的核心方向。",
      responsibilities: ["组织开发协作与项目落地。", "维护官网、工具链与技术资产。", "支持活动中的技术分享与实操环节。"],
      contact: "请通过公众号或联系页咨询",
      membersCount: "持续招募",
      lead: "核心成员名单将随学期更新",
      tags: ["开发", "工程", "开源"],
    },
    {
      name: "宣传部",
      slug: "media",
      description: "负责内容传播、视觉表达与品牌建设，让协会的活动与观点更容易被看见。",
      responsibilities: ["负责海报、推文和视觉内容产出。", "维护公众号、官网与对外传播节奏。", "统一协会品牌形象与内容风格。"],
      contact: "请通过公众号或联系页咨询",
      membersCount: "持续招募",
      lead: "核心成员名单将随学期更新",
      tags: ["品牌", "内容", "视觉"],
    },
    {
      name: "运营部",
      slug: "operations",
      description: "负责社群组织、活动推进与日常协作，是协会对内运转的重要支撑。",
      responsibilities: ["统筹活动流程、报名与现场执行。", "维护社群节奏与成员协作体验。", "沉淀活动复盘与流程规范。"],
      contact: "请通过公众号或联系页咨询",
      membersCount: "持续招募",
      lead: "核心成员名单将随学期更新",
      tags: ["活动", "协作", "运营"],
    },
    {
      name: "外联部",
      slug: "partnerships",
      description: "负责对外沟通、合作拓展与资源连接，帮助协会建立更广泛的外部协作网络。",
      responsibilities: ["对接校内外合作机会与交流资源。", "维护公开活动中的合作联络。", "支持协会品牌与项目的对外沟通。"],
      contact: "请通过公众号或联系页咨询",
      membersCount: "持续招募",
      lead: "核心成员名单将随学期更新",
      tags: ["合作", "联络", "资源"],
    },
    {
      name: "学术研究部",
      slug: "research",
      description: "围绕区块链基础理论、行业观察与前沿议题展开学习、研讨与知识沉淀。",
      responsibilities: ["组织主题阅读、分享与研究讨论。", "沉淀学习资料、专题文档与方法总结。", "支持协会公共内容的深度输出。"],
      contact: "请通过公众号或联系页咨询",
      membersCount: "持续招募",
      lead: "核心成员名单将随学期更新",
      tags: ["研究", "学术", "分享"],
    },
  ],
  en: [
    {
      name: "Technology",
      slug: "tech",
      description: "Responsible for the website, tools, project collaboration, and technical practice — the core of the association's technical capability building.",
      responsibilities: ["Organize development collaboration and project delivery.", "Maintain the website, toolchain, and technical assets.", "Support technical sharing and hands-on sessions in events."],
      contact: "Please inquire via WeChat or the contact page",
      membersCount: "Recruiting",
      lead: "Core member list will be updated each semester",
      tags: ["Development", "Engineering", "Open Source"],
    },
    {
      name: "Media",
      slug: "media",
      description: "Responsible for content distribution, visual expression, and brand building, making the association's activities and viewpoints more visible.",
      responsibilities: ["Produce posters, articles, and visual content.", "Maintain WeChat, website, and external communication cadence.", "Unify brand image and content style."],
      contact: "Please inquire via WeChat or the contact page",
      membersCount: "Recruiting",
      lead: "Core member list will be updated each semester",
      tags: ["Brand", "Content", "Visual"],
    },
    {
      name: "Operations",
      slug: "operations",
      description: "Responsible for community organization, event execution, and daily collaboration — the backbone of the association's internal operations.",
      responsibilities: ["Coordinate event logistics, registration, and on-site execution.", "Maintain community rhythm and member collaboration experience.", "Document event retrospectives and process standards."],
      contact: "Please inquire via WeChat or the contact page",
      membersCount: "Recruiting",
      lead: "Core member list will be updated each semester",
      tags: ["Events", "Collaboration", "Operations"],
    },
    {
      name: "Partnerships",
      slug: "partnerships",
      description: "Responsible for external communication, collaboration expansion, and resource connection, helping the association build a broader external network.",
      responsibilities: ["Connect with internal and external collaboration opportunities.", "Maintain partnership contacts for public events.", "Support external communication for the association's brand and projects."],
      contact: "Please inquire via WeChat or the contact page",
      membersCount: "Recruiting",
      lead: "Core member list will be updated each semester",
      tags: ["Partnership", "Liaison", "Resources"],
    },
    {
      name: "Research",
      slug: "research",
      description: "Focuses on blockchain fundamentals, industry observation, and frontier topics through learning, seminars, and knowledge accumulation.",
      responsibilities: ["Organize thematic reading, sharing, and research discussions.", "Accumulate learning materials, topic documents, and methodology summaries.", "Support in-depth output for the association's public content."],
      contact: "Please inquire via WeChat or the contact page",
      membersCount: "Recruiting",
      lead: "Core member list will be updated each semester",
      tags: ["Research", "Academic", "Sharing"],
    },
  ],
};
