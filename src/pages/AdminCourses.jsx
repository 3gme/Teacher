import { useMemo } from "react";
import { useSelector } from "react-redux";

import Header from "../features/adminCourses/Header";
import CoursesSide from "../features/adminCourses/CoursesSide";
import CourseDetailsForm from "../features/adminCourses/CourseDetailsForm";
import SectionsAndLessons from "../features/adminCourses/SectionsAndLessons";

function AdminCourses() {
  const { selectedIds, courses } = useSelector((state) => state.admin);
  const selectedCourseId = selectedIds.courseId;

  const selectedCourse = useMemo(
    () => courses.find((course) => course.courseId === selectedCourseId),
    [courses, selectedCourseId],
  );

  const courseStats = useMemo(() => {
    const sectionsCount = selectedCourse?.sections.length || 0;
    const lessonsCount =
      selectedCourse?.sections.reduce(
        (total, section) => total + section.lessons.length,
        0,
      ) || 0;

    return { sectionsCount, lessonsCount };
  }, [selectedCourse]);

  return (
    <section className="space-y-6">
      <Header
        sectionCount={courseStats.sectionsCount}
        lessonCount={courseStats.lessonsCount}
      />

      <div className="grid gap-6 xl:grid-cols-[320px_1fr] pb-10">
        <CoursesSide courses={courses} />
        <CourseDetailsForm key={selectedCourseId} />
      </div>

      <div className="space-y-6">
        <SectionsAndLessons />
      </div>
    </section>
  );
}

export default AdminCourses;
