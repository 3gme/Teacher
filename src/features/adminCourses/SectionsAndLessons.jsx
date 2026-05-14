import { useQueryClient } from "@tanstack/react-query";
import SectionAdmin from "../../components/SectionAdmin";
import SectionsAndLessonsHeader from "../../components/SectionsAndLessonsHeader";
import { useSearchParams } from "react-router-dom";

function SectionsAndLessons() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId") || null;
  const selectedCourse = queryClient.getQueryData(["course", courseId]);
  console.log(selectedCourse)

  const sectionsCount = selectedCourse?.sections?.length || 0;

  if (!selectedCourse) {
    return (
      <div className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
        <p className="text-base text-ink-600">Choose Course First</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm lg:p-6">
        <SectionsAndLessonsHeader sectionsCount={sectionsCount} />

        <div className="space-y-4">
          {selectedCourse.sections ? (
            selectedCourse?.sections?.map((section) => (
              <SectionAdmin key={section.sectionId} section={section} />
            ))
          ) : (
            <p className="text-base text-ink-600">No sections available</p>
          )}
        </div>
      </article>
    </div>
  );
}

export default SectionsAndLessons;
