import CourseCard from "../components/CourseCard";
import courses from "../data/CoursesData.json";

function Courses() {
  return (
    <section className="min-h-screen bg-surface px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-700">
            Courses
          </span>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Grow your teaching skills with short, practical programs
          </h1>
          <p className="max-w-3xl text-sm leading-6 text-ink-600 sm:text-base">
            Explore flexible courses designed for teachers who want useful ideas
            they can apply in real classrooms right away.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Courses;
