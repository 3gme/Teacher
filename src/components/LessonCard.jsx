import { useSearchParams } from "react-router-dom";
import useDeleteLesson from "../features/adminCourses/useDeleteLesson";
import useGetLessonById from "../features/adminCourses/useGetLessonById";
import AdminActions from "./AdminActions";
import ConfirmationModal from "./ConfirmationModal";
import EditModal from "./EditModal";
import Modal, { useModalContext } from "./Modal";
import Spinner from "./Spinner";

function LessonCard({ lessonId }) {
  const { lesson, isPending } = useGetLessonById(lessonId);
  const { close } = useModalContext();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  const { deleteLesson } = useDeleteLesson(courseId, close);

  if (!lesson || isPending) {
    return <Spinner />;
  }
  function handleDelete() {
    deleteLesson(lessonId);
  }

  const { title } = lesson || {};

  return (
    <li className="p-3 rounded-lg bg-surface-50 flex justify-between hover:bg-surface-200 transition-colors duration-100 cursor-pointer">
      <div>
        <span className="text-ink-700">{title}</span>
      </div>
      <div className="flex items-center gap-3">
        <AdminActions lesson={lesson} />

        <Modal.Window name={`edit-section-${title}`}>
          <EditModal lesson={lesson} />
        </Modal.Window>
        <Modal.Window name={`delete-section-${title}`}>
          <ConfirmationModal
            ButtonContent="Delete"
            Header="Confirm Delete"
            message={`Are you sure you want to delete the lesson "${title}"?`}
            onClick={handleDelete}
          />
        </Modal.Window>
      </div>
    </li>
  );
}

export default LessonCard;

/**
 * <div className="flex items-center gap-3">
        <SectionOrderField section={section} />
        <SectionAdminActions section={section} />
        <button
          type="button"
          onClick={toggle}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-100 text-ink-700 transition hover:bg-primary-50 hover:text-primary-600"
          aria-label={isOpen ? "Collapse section" : "Expand section"}
        >
          <span className={`transition ${isOpen ? "rotate-180" : ""}`}>
            <FaChevronDown />
          </span>
        </button>
      </div>
 */
