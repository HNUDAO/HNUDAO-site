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

export const departments: Department[] = [
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
];
