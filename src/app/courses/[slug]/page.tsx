import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_COURSES } from "@/data/courses";
import { CourseDetailsView } from "@/features/course-details/course-details-view";

interface CourseDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CourseDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug) || ALL_COURSES[0];

  return {
    title: `${course.title} - ByteSpace`,
    description: `Learn ${course.title} by ${course.creator} on ByteSpace. Master ${course.category} with comprehensive video lessons and resources.`,
  };
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug) || ALL_COURSES[0];

  if (!course) {
    notFound();
  }

  return <CourseDetailsView course={course} />;
}
