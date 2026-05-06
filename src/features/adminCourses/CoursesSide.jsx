import { FaBookOpen, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import CourseSideCourseSlide from "./CourseSideCourseSlide";
import Modal from "../../components/Modal";
import AddCourseModal from "./AddCourseModal";

function CoursesSide() {
  // TODO: Get Courses from API and store in Redux
  const courses = useSelector((state) => state.admin.courses);

  return (
    <aside className="rounded-2xl border border-surface-200 bg-white p-4 shadow-sm max-h-140 overflow-y-auto">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink-800">
        <FaBookOpen className="text-primary-600" />
        Courses
      </div>

      <div className="space-y-2">
        {courses.map((course) => (
          <CourseSideCourseSlide key={course.courseId} course={course} />
        ))}
        <Modal>
          <Modal.Open opens="add-course">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-primary-200 bg-primary-50 p-3 text-sm font-semibold text-primary-700 transition hover:border-primary hover:bg-primary-100"
            >
              <FaPlus />
              Add new course
            </button>
          </Modal.Open>
          <Modal.Window name="add-course">
            <AddCourseModal />
          </Modal.Window>
        </Modal>
      </div>
    </aside>
  );
}

export default CoursesSide;
