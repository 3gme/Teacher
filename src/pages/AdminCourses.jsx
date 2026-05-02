import CourseCard from "../components/CourseCard";
import courses from "../data/CoursesData.json";

function AdminCourses() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </ul>
  );
}

export default AdminCourses;
