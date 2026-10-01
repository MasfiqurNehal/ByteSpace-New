export interface CourseItem {
  id: string;
  title: string;
  creator: string;
  creatorAvatar?: string;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  rating: number;
  category: string;
  thumbnailGradient: string;
  iconName: string;
}

export const CATEGORY_TABS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const POPULAR_COURSES: CourseItem[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    category: "Design",
    thumbnailGradient: "from-purple-600 via-indigo-600 to-blue-600",
    iconName: "Figma",
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    category: "Development",
    thumbnailGradient: "from-blue-600 via-cyan-600 to-teal-500",
    iconName: "Layers",
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    category: "Data Science",
    thumbnailGradient: "from-cyan-600 via-blue-700 to-indigo-800",
    iconName: "Database",
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Self-Care",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    category: "Productivity",
    thumbnailGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    iconName: "Clock",
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    category: "Business",
    thumbnailGradient: "from-amber-500 via-orange-600 to-red-600",
    iconName: "DollarSign",
  },
  {
    id: "startup-success",
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    category: "Business",
    thumbnailGradient: "from-pink-600 via-purple-600 to-indigo-700",
    iconName: "Rocket",
  },
];

export const PATHWAY_CATEGORIES = [
  {
    id: "design",
    name: "Design",
    icon: "Palette",
    color: "text-purple-600 bg-purple-50",
  },
  {
    id: "development",
    name: "Development",
    icon: "Code",
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: "it-software",
    name: "IT & Software",
    icon: "Cpu",
    color: "text-cyan-600 bg-cyan-50",
  },
  {
    id: "business",
    name: "Business",
    icon: "Briefcase",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "Megaphone",
    color: "text-orange-600 bg-orange-50",
  },
  {
    id: "photography",
    name: "Photography",
    icon: "Camera",
    color: "text-pink-600 bg-pink-50",
  },
];

