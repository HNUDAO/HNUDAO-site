export type Member = {
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

export const members: Member[] = [];
