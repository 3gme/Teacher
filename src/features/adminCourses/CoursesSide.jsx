import { FaBookOpen, FaPlus } from "react-icons/fa";
import Modal from "../../components/Modal";
import AddCourseModal from "./AddCourseModal";
import CourseSideCourseSlide from "./CourseSideCourseSlide";
import useGetCourses from "./useGetCourses";

function CoursesSide() {
  // TODO: Get Courses from API and store in Redux
  const { courses, isLoading } = useGetCourses();

  if (isLoading) {
    return (
      <aside className="max-h-full overflow-y-auto rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2 text-base font-semibold text-ink-800 min-h-fit">
          <FaBookOpen className="text-primary-600" />
          Courses
        </div>
        <div>Loading courses...</div>
      </aside>
    );
  }

  return (
    <aside className="h-full max-h-full overflow-y-auto rounded-2xl border border-surface-200 bg-white p-5 shadow-sm flex flex-col">
      <div className="mb-5 flex items-center gap-2 text-base font-semibold text-ink-800">
        <FaBookOpen className="text-primary-600" />
        Courses
      </div>

      <div className="space-y-2 flex-1 overflow-y-auto">
        {courses.map((course) => (
          <CourseSideCourseSlide key={course.courseId} course={course} />
        ))}
        <Modal.Open opens="add-course">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-primary-200 bg-primary-50 px-4 py-3.5 text-base font-semibold text-primary-700 transition hover:border-primary hover:bg-primary-100"
          >
            <FaPlus />
            Add new course
          </button>
        </Modal.Open>
        <Modal.Window name="add-course">
          <AddCourseModal />
        </Modal.Window>
      </div>
    </aside>
  );
}

export default CoursesSide;
