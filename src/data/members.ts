import type { Locale } from "@/lib/i18n";

export type Member = {
  group: "advisor" | "member";
  name: string;
  role: string;
  /** 头衔下方展示的信息，指导老师与学生成员各自只填有的那几项 */
  department?: string;
  grade?: string;
  /** 学生成员用 X 头像，指导老师不设头像 */
  avatar?: string;
  bio?: string;
  github?: string;
  /** X 用户名（不带 @），展示与链接都由它生成 */
  x?: string;
  email?: string;
  /** 有值时名字本身可点击跳转 */
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
      bio: "经济学博士，长期从事应用经济学研究与金融实务培训，具备 CPA、CFA 等专业资质，为协会提供产业理解与实践方向指导。",
      personalSite: "https://www.htu.edu.cn/ggsw/2024/1012/c22109a322668/page.htm",
    },
    {
      group: "advisor",
      name: "李功丽",
      role: "指导老师",
      department: "技术指导",
      grade: "河南师范大学",
      bio: "博士、副教授、硕士生导师，长期承担操作系统、密码学与网络安全相关教学与课程建设，为协会提供教学与技术研究指导。",
      personalSite: "https://www.htu.edu.cn/teaching/2023/0509/c14518a271426/page.htm",
    },
    {
      group: "advisor",
      name: "洪双喜",
      role: "CTA",
      department: "技术指导",
      grade: "河南师范大学",
      bio: "网络空间安全系主任，长期从事网络与信息安全方向的教学与科研工作，为协会提供技术路线与安全实践指导。",
      personalSite: "https://baike.baidu.com/item/%E6%B4%AA%E5%8F%8C%E5%96%9C/49897836",
    },
    {
      group: "member",
      name: "林嘉屿",
      role: "CEO",
      avatar: "/images/members/0xCryptoAce.png",
      x: "0xCryptoAce",
      github: "https://github.com/CryptographyBloke",
    },
    {
      group: "member",
      name: "young",
      role: "CTO",
      avatar: "/images/members/TongTong44635.png",
      x: "TongTong44635",
      github: "https://github.com/Ttungx",
    },
    {
      group: "member",
      name: "YVORYU",
      role: "TA",
      avatar: "/images/members/LPogjQCnHH20142.png",
      x: "LPogjQCnHH20142",
      github: "https://github.com/YVORYU",
    },
  ],
  en: [
    {
      group: "advisor",
      name: "Chao Guo",
      role: "Advisor",
      department: "Academic Guidance",
      grade: "Henan Normal University",
      bio: "PhD in Economics, long engaged in applied economics research and financial practice training. Holds CPA, CFA, and other professional qualifications. Provides the association with industry understanding and practical direction guidance.",
      personalSite: "https://www.htu.edu.cn/ggsw/2024/1012/c22109a322668/page.htm",
    },
    {
      group: "advisor",
      name: "Gongli Li",
      role: "Advisor",
      department: "Technical Guidance",
      grade: "Henan Normal University",
      bio: "PhD, Associate Professor, Master's Supervisor. Long engaged in teaching and curriculum development for operating systems, cryptography, and cybersecurity. Provides the association with teaching and technical research guidance.",
      personalSite: "https://www.htu.edu.cn/teaching/2023/0509/c14518a271426/page.htm",
    },
    {
      group: "advisor",
      name: "Shuangxi Hong",
      role: "CTA",
      department: "Technical Guidance",
      grade: "Henan Normal University",
      bio: "Director of the Cyberspace Security Department. Long engaged in teaching and research in network and information security, providing the association with technical direction and security practice guidance.",
      personalSite: "https://baike.baidu.com/item/%E6%B4%AA%E5%8F%8C%E5%96%9C/49897836",
    },
    {
      group: "member",
      name: "Jiayu Lin",
      role: "CEO",
      avatar: "/images/members/0xCryptoAce.png",
      x: "0xCryptoAce",
      github: "https://github.com/CryptographyBloke",
    },
    {
      group: "member",
      name: "young",
      role: "CTO",
      avatar: "/images/members/TongTong44635.png",
      x: "TongTong44635",
      github: "https://github.com/Ttungx",
    },
    {
      group: "member",
      name: "YVORYU",
      role: "TA",
      avatar: "/images/members/LPogjQCnHH20142.png",
      x: "LPogjQCnHH20142",
      github: "https://github.com/YVORYU",
    },
  ],
};
