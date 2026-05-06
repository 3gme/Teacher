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
      className={`w-full rounded-xl border p-3 text-left transition ${
        isSelected
          ? "border-primary-200 bg-primary-50"
          : "border-transparent bg-surface-50 hover:border-primary-100 hover:bg-white"
      }`}
    >
      <span className="block text-sm font-semibold text-ink-900">
        {course.title}
      </span>
      <span className="mt-1 block text-xs text-ink-500">
        {course.sections.length} sections
      </span>
    </button>
  );
}

export default CourseSideCourseSlide;
