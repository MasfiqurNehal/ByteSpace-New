export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: "student" | "creator" | "admin";
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnailUrl: string;
  creatorId: string;
  creatorName: string;
  creatorAvatarUrl: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  price: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessonCount: number;
}

export interface Creator {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  coverImageUrl?: string;
  studentCount: number;
  courseCount: number;
  rating: number;
  reviewCount: number;
}

