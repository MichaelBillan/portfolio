export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stars: number;
  language: string | null;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeUrl?: string;
}
