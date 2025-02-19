export interface Article {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  image?: string;
  isNew?: boolean;
  category: "latest" | "support" | "likeit";
  day: "월" | "화" | "수" | "목" | "금" | "토" | "일";
  publishedAt?: string; // For latest sorting
  supportCount?: number; // For support sorting
  likeitCount?: number; // For likeit sorting
}

export type Category = "latest" | "support" | "likeit";
