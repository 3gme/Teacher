import { useParams } from "react-router-dom";
import coursesData from "../data/CoursesData.json";
import CourseHeader from "../components/CourseHeader";
import CourseSectionList from "../components/CourseSectionList";

export default function CoursePage() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.courseId === parseInt(id));
  const { sections } = course;

  return (
    <div className="min-h-screen bg-surface-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <CourseHeader course={course} />

        <CourseSectionList sections={sections} />
      </div>
    </div>
  );
}
