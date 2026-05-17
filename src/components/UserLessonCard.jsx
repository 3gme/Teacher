import { Link } from "react-router-dom";

function UserLessonCard({ lesson, courseId }) {
  const { lessonId, title } = lesson;

  return (
    <li className="flex items-center justify-between rounded-lg border border-primary-100 bg-surface-50 px-4 py-3 transition hover:border-primary-200 hover:bg-primary-50">
      <div className="min-w-0">
        <h4 className="truncate text-base font-semibold text-ink-800">
          {title}
        </h4>
        <p className="mt-1 text-sm text-ink-500">Ready to watch</p>
      </div>

      <Link
        to={`/courses/${courseId}/${lessonId}?title=${encodeURIComponent(title)}`}
        className="shrink-0 rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
      >
        Watch
      </Link>
    </li>
  );
}

export default UserLessonCard;