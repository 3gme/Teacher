import { useMemo } from "react";
import { useSelector } from "react-redux";

import { useQueryClient } from "@tanstack/react-query";
import CourseDetailsForm from "../features/adminCourses/CourseDetailsForm";
import CoursesSide from "../features/adminCourses/CoursesSide";
import Header from "../features/adminCourses/Header";
import SectionsAndLessons from "../features/adminCourses/SectionsAndLessons";

function AdminCourses() {
  const queryClient = useQueryClient();
  const courses = queryClient.getQueryData(["Courses"]);

  const { selectedIds } = useSelector((state) => state.admin);
  const selectedCourseId = selectedIds.courseId;

  const currentSelectedCourse = useMemo(
    () => courses?.find((course) => course.courseId === selectedCourseId),
    [courses, selectedCourseId],
  );

  return (
    <section className="space-y-6 pb-10 overflow-y-auto">
      <Header />

      <div className="grid gap-6 xl:h-128 xl:grid-cols-[320px_1fr] pb-10 items-stretch max-h-144">
        <CoursesSide />
        <CourseDetailsForm
          key={selectedCourseId}
          course={currentSelectedCourse}
        />
      </div>

      <div className="space-y-6">
        <SectionsAndLessons />
      </div>
    </section>
  );
}

export default AdminCourses;
