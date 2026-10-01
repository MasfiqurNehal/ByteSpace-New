export interface CourseItem {
  id: string;
  title: string;
  creator: string;
  category: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  billingType: string;
  image: string;
  slug: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: "design" | "development" | "software" | "business" | "marketing" | "photography";
  coursesCount?: number;
  bgGradient?: string;
}

export const FEATURED_COURSES: CourseItem[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    category: "Design",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    billingType: "/lifetime",
    image: "/images/courses/course-figma.png",
    slug: "learn-figma-from-basic",
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    creator: "purepearl studio",
    category: "Design",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    billingType: "/lifetime",
    image: "/images/courses/course-digital-asset.png",
    slug: "build-digital-asset",
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    creator: "purepearl studio",
    category: "IT & Software",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    billingType: "/lifetime",
    image: "/images/courses/course-big-data.png",
    slug: "power-of-big-data",
  },
  {
    id: "course-4",
    title: "Balancing Productivity and Self-Care",
    creator: "purepearl studio",
    category: "Personal Growth",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    billingType: "/lifetime",
    image: "/images/courses/course-productivity.png",
    slug: "balancing-productivity-self-care",
  },
  {
    id: "course-5",
    title: "Mastering Money Management",
    creator: "purepearl studio",
    category: "Business",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    billingType: "/lifetime",
    image: "/images/courses/course-money.png",
    slug: "mastering-money-management",
  },
  {
    id: "course-6",
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    category: "Business",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    billingType: "/lifetime",
    image: "/images/courses/course-startup.png",
    slug: "from-idea-to-startup-success",
  },
];

export const CATEGORIES_LIST: CategoryItem[] = [
  { id: "cat-1", name: "Design", iconName: "design" },
  { id: "cat-2", name: "Development", iconName: "development" },
  { id: "cat-3", name: "IT & Software", iconName: "software" },
  { id: "cat-4", name: "Business", iconName: "business" },
  { id: "cat-5", name: "Marketing", iconName: "marketing" },
  { id: "cat-6", name: "Photography", iconName: "photography" },
];

export const FILTER_TABS = [
  "All Categories",
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
  "Personal Growth",
  "+ More",
];
