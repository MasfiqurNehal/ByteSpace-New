import type { Metadata } from "next";
import { ALL_COURSES } from "@/data/courses";
import { CreatorProfileView } from "@/features/creator-profile/creator-profile-view";

export const metadata: Metadata = {
  title: "PurePearl Studio - Creator Profile - ByteSpace",
  description: "Explore courses and digital assets published by PurePearl Studio on ByteSpace.",
};

export default function CreatorsPage() {
  const creatorCourses = ALL_COURSES.filter(
    (c) => c.creator.toLowerCase() === "purepearl studio"
  );

  return (
    <CreatorProfileView
      creatorName="PurePearl Studio"
      courses={creatorCourses.length > 0 ? creatorCourses : ALL_COURSES.slice(0, 6)}
    />
  );
}
