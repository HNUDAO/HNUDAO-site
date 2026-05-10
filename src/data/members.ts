import type { Locale } from "@/lib/i18n";

export type Member = {
  group: "advisor" | "member";
  name: string;
  role: string;
  department: string;
  grade: string;
  avatar: string;
  bio: string;
  links?: string[];
  github?: string;
  email?: string;
  personalSite?: string;
};

export const members: Record<Locale, Member[]> = {
  "zh-CN": [
    {
      group: "advisor",
      name: "郭超",
      role: "指导老师",
      department: "学术指导",
      grade: "河南师范大学",
      avatar: "",
      bio: "经济学博士，长期从事应用经济学研究与金融实务培训，具备 CPA、CFA 等专业资质，为协会提供产业理解与实践方向指导。",
      personalSite: "https://www.htu.edu.cn/ggsw/2024/1012/c22109a322668/page.htm",
    },
    {
      group: "advisor",
      name: "李功丽",
      role: "指导老师",
      department: "技术指导",
      grade: "河南师范大学",
      avatar: "",
      bio: "博士、副教授、硕士生导师，长期承担操作系统、密码学与网络安全相关教学与课程建设，为协会提供教学与技术研究指导。",
      personalSite: "https://www.htu.edu.cn/teaching/2023/0509/c14518a271426/page.htm",
    },
  ],
  en: [
    {
      group: "advisor",
      name: "Chao Guo",
      role: "Advisor",
      department: "Academic Guidance",
      grade: "Henan Normal University",
      avatar: "",
      bio: "PhD in Economics, long engaged in applied economics research and financial practice training. Holds CPA, CFA, and other professional qualifications. Provides the association with industry understanding and practical direction guidance.",
      personalSite: "https://www.htu.edu.cn/ggsw/2024/1012/c22109a322668/page.htm",
    },
    {
      group: "advisor",
      name: "Gongli Li",
      role: "Advisor",
      department: "Technical Guidance",
      grade: "Henan Normal University",
      avatar: "",
      bio: "PhD, Associate Professor, Master's Supervisor. Long engaged in teaching and curriculum development for operating systems, cryptography, and cybersecurity. Provides the association with teaching and technical research guidance.",
      personalSite: "https://www.htu.edu.cn/teaching/2023/0509/c14518a271426/page.htm",
    },
  ],
};
