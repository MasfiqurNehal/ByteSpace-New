import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_COURSES } from "@/data/courses";
import { CourseReviewsView } from "@/features/course-reviews/course-reviews-view";

interface CourseReviewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CourseReviewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug) || ALL_COURSES[0];

  return {
    title: `Reviews - ${course.title} - ByteSpace`,
    description: `Read student ratings and reviews for ${course.title} on ByteSpace.`,
  };
}

export default async function CourseReviewsPage({
  params,
}: CourseReviewsPageProps) {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug) || ALL_COURSES[0];

  if (!course) {
    notFound();
  }

  return <CourseReviewsView course={course} />;
}
