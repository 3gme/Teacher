import AddLessonModal from "./AddLessonModal";
import LessonCard from "./LessonCard";
import Modal from "./Modal";

function SectionLessonsList({ lessons }) {
  return (
    <div className="border-t border-primary-100 px-5 py-4">
      <div className="mb-4 flex items-center gap-3">
        <h4 className="text-lg font-semibold text-ink-800">Lessons</h4>
        <span className="rounded-2xl bg-primary-200 px-3 py-1 text-base font-bold text-ink-700">
          {lessons.length}
        </span>
      </div>

      <div className="space-y-3">
        {lessons.length > 0 ? (
          <ul className="space-y-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.lessonId} lesson={lesson} />
            ))}
          </ul>
        ) : (
          <p className="text-base text-ink-500">No lessons available yet.</p>
        )}
      </div>

      <Modal.Open opens="addLesson">
        <button
          type="button"
          className="mt-4 rounded-xl border border-primary-100 px-4 py-2 text-base font-semibold text-primary-700 transition hover:bg-primary-50"
        >
          + Add Lesson
        </button>
      </Modal.Open>
      <Modal.Window name="addLesson">
        <AddLessonModal />
      </Modal.Window>
    </div>
  );
}

export default SectionLessonsList;
