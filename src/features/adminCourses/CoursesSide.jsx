import { FaBookOpen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function CoursesSide({ courses }) {
  const selectedCourseId = useSelector(
    (state) => state.admin.selectedIds.courseId,
  );
  const dispatch = useDispatch();
  console.log(selectedCourseId);
  return (
    <aside className="rounded-2xl border border-surface-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink-800">
        <FaBookOpen className="text-primary-600" />
        Courses
      </div>

      <div className="space-y-2">
        {courses.map((course) => {
          const isSelected = course.courseId === selectedCourseId;

          return (
            <button
              key={course.courseId}
              type="button"
              onClick={() =>
                dispatch({
                  type: "admin/setCourseId",
                  payload: course.courseId,
                })
              }
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
        })}
      </div>
    </aside>
  );
}

export default CoursesSide;
