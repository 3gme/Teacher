import { useDispatch, useSelector } from "react-redux";
import { setCourseId } from "./adminSlice";

function CourseSideCourseSlide({ course }) {
  const selectedCourseId = useSelector(
    (state) => state.admin.selectedIds.courseId,
  );
  const dispatch = useDispatch();
  const isSelected = course.courseId === selectedCourseId;

  return (
    <button
      key={course.courseId}
      type="button"
      onClick={() => dispatch(setCourseId(course.courseId))}
      className={`w-full rounded-xl border px-4 py-3.5 text-left transition ${
        isSelected
          ? "border-primary-200 bg-primary-50"
          : "border-transparent bg-surface-50 hover:border-primary-100 hover:bg-white"
      }`}
    >
      <span className="block text-base font-semibold leading-6 text-ink-900">
        {course.title}
      </span>
      <span className="mt-1.5 block text-sm text-ink-500">
        {course.sections.length} sections
      </span>
    </button>
  );
}

export default CourseSideCourseSlide;
