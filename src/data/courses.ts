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

export const ALL_COURSES: CourseItem[] = [
  ...FEATURED_COURSES,
  {
    id: "course-7",
    title: "Advanced Next.js 15 & React 19 Architecture",
    creator: "alex rivera",
    category: "Development",
    rating: 4.9,
    lessons: 28,
    duration: "6 hours 45 mins",
    comments: 112,
    level: "Advanced",
    price: 49,
    billingType: "/lifetime",
    image: "/images/courses/course-figma.png",
    slug: "advanced-nextjs-architecture",
  },
  {
    id: "course-8",
    title: "UX Research Mastery: User Interviews & Testing",
    creator: "sarah jenkins",
    category: "Design",
    rating: 4.8,
    lessons: 22,
    duration: "4 hours 10 mins",
    comments: 84,
    level: "Intermediate",
    price: 35,
    billingType: "/lifetime",
    image: "/images/courses/course-digital-asset.png",
    slug: "ux-research-mastery",
  },
  {
    id: "course-9",
    title: "Complete Python for Data Science & ML",
    creator: "david chen",
    category: "IT & Software",
    rating: 4.7,
    lessons: 45,
    duration: "12 hours 30 mins",
    comments: 230,
    level: "Beginner",
    price: 39,
    billingType: "/lifetime",
    image: "/images/courses/course-big-data.png",
    slug: "python-for-data-science",
  },
  {
    id: "course-10",
    title: "Growth Marketing & Viral Acquisition Strategies",
    creator: "elena rostova",
    category: "Marketing",
    rating: 4.6,
    lessons: 19,
    duration: "3 hours 50 mins",
    comments: 73,
    level: "Intermediate",
    price: 29,
    billingType: "/lifetime",
    image: "/images/courses/course-money.png",
    slug: "growth-marketing-strategies",
  },
  {
    id: "course-11",
    title: "Visual Storytelling & Commercial Photography",
    creator: "marcus vance",
    category: "Photography",
    rating: 4.9,
    lessons: 31,
    duration: "5 hours 20 mins",
    comments: 95,
    level: "Intermediate",
    price: 45,
    billingType: "/lifetime",
    image: "/images/courses/course-startup.png",
    slug: "visual-storytelling-photography",
  },
  {
    id: "course-12",
    title: "Mindset & Executive Productivity Systems",
    creator: "dr. emily watson",
    category: "Personal Growth",
    rating: 4.8,
    lessons: 15,
    duration: "2 hours 45 mins",
    comments: 67,
    level: "Beginner",
    price: 20,
    billingType: "/lifetime",
    image: "/images/courses/course-productivity.png",
    slug: "executive-productivity-systems",
  },
];

export const CATEGORIES_LIST: CategoryItem[] = [
  { id: "cat-1", name: "Design", iconName: "design", coursesCount: 142 },
  { id: "cat-2", name: "Development", iconName: "development", coursesCount: 218 },
  { id: "cat-3", name: "IT & Software", iconName: "software", coursesCount: 95 },
  { id: "cat-4", name: "Business", iconName: "business", coursesCount: 130 },
  { id: "cat-5", name: "Marketing", iconName: "marketing", coursesCount: 88 },
  { id: "cat-6", name: "Photography", iconName: "photography", coursesCount: 64 },
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

export const SEARCH_PAGE_TABS = [
  "All",
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
  "Personal Growth",
];

export const LEVEL_OPTIONS = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const SORT_OPTIONS = [
  "Most relevant",
  "Highest rated",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];
