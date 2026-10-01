import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_COURSES } from "@/data/courses";
import { CourseLessonsView } from "@/features/course-lessons/course-lessons-view";

interface CourseLessonsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CourseLessonsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug) || ALL_COURSES[0];

  return {
    title: `Lessons - ${course.title} - ByteSpace`,
    description: `Curriculum and video lessons for ${course.title} by ${course.creator} on ByteSpace.`,
  };
}

export default async function CourseLessonsPage({
  params,
}: CourseLessonsPageProps) {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug) || ALL_COURSES[0];

  if (!course) {
    notFound();
  }

  return <CourseLessonsView course={course} />;
}
