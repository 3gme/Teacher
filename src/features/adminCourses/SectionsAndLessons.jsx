import { useSelector } from "react-redux";
import SectionAdmin from "../../components/SectionAdmin";
import SectionsAndLessonsHeader from "../../components/SectionsAndLessonsHeader";

function SectionsAndLessons() {
  const selectedCourse = useSelector((state) => {
    const selectedCourseId = state.admin.selectedIds.courseId || 1;
    return state.admin.courses.find(
      (course) => course.courseId === selectedCourseId,
    );
  });

  const sectionsCount = selectedCourse?.sections.length || 0;

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
          {selectedCourse.sections.map((section) => (
            <SectionAdmin key={section.sectionId} section={section} />
          ))}
        </div>
      </article>
    </div>
  );
}

export default SectionsAndLessons;
