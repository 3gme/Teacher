import { useSearchParams } from "react-router-dom";

import CourseDetailsForm from "../features/adminCourses/CourseDetailsForm";
import CoursesSide from "../features/adminCourses/CoursesSide";
import Header from "../features/adminCourses/Header";
import SectionsAndLessons from "../features/adminCourses/SectionsAndLessons";

function AdminCourses() {
  const [searchParams] = useSearchParams();

  const selectedCourseId = +searchParams.get("courseId") || null;

  return (
    <section className="space-y-6 pb-10 overflow-y-auto">
      <Header />

      <div className="grid gap-6 xl:h-128 xl:grid-cols-[320px_1fr] pb-10 items-stretch max-h-144">
        <CoursesSide />
        <CourseDetailsForm key={selectedCourseId} />
      </div>

      <div className="space-y-6">
        <SectionsAndLessons />
      </div>
    </section>
  );
}

export default AdminCourses;
