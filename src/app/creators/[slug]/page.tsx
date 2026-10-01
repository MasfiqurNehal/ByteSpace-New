import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_COURSES } from "@/data/courses";
import { CreatorProfileView } from "@/features/creator-profile/creator-profile-view";

interface CreatorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "purepearl-studio" },
    { slug: "alex-rivera" },
    { slug: "sarah-jenkins" },
  ];
}

export async function generateMetadata({
  params,
}: CreatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const formattedName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedName} - Creator Profile - ByteSpace`,
    description: `Discover courses, masterclasses, and digital products by ${formattedName} on ByteSpace.`,
  };
}

export default async function DynamicCreatorPage({ params }: CreatorPageProps) {
  const { slug } = await params;
  const formattedName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const creatorCourses = ALL_COURSES.filter(
    (c) => c.creator.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug
  );

  return (
    <CreatorProfileView
      creatorName={formattedName || "PurePearl Studio"}
      courses={creatorCourses.length > 0 ? creatorCourses : ALL_COURSES.slice(0, 6)}
    />
  );
}
