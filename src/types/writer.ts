export interface Writer {
  id: number;
  name: string;
  profileImage: string;
  category: "취미" | "사진" | "스타트업";
  description: string;
  subDescription: string;
  followers?: number;
  articles?: number;
}

export type WriterCategory = "취미" | "사진" | "스타트업";
