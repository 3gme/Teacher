import { useParams } from "react-router-dom";
import CourseHeader from "../components/CourseHeader";
import CourseSectionList from "../components/CourseSectionList";
import useGetCourseById from "../features/adminCourses/useGetCourseById";
import Spinner from "../components/Spinner";

export default function CoursePage() {
  const { id } = useParams();
  const { course, isPending } = useGetCourseById(id);

  if (isPending || !course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  const { sections } = course;
  return (
    <div className="min-h-screen bg-surface-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <CourseHeader course={course} />

        <CourseSectionList sections={sections} courseId={course.courseId} />
      </div>
    </div>
  );
}
