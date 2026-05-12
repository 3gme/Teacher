import OrderField from "./OrderField";
import AdminActions from "./AdminActions";
import Modal from "./Modal";
import EditModal from "./EditModal";

function LessonCard({ lesson }) {
  const { title } = lesson;

  return (
    <li className="p-3 rounded-lg bg-surface-50 flex justify-between hover:bg-surface-200 transition-colors duration-100 cursor-pointer">
      <div>
        <span className="text-ink-700">{title}</span>
      </div>
      <div className="flex items-center gap-3">
        <OrderField lesson={lesson} />
        <Modal>
          <AdminActions lesson={lesson} />

          <Modal.Window name={`edit-section-${title}`}>
            <EditModal lesson={lesson} />
          </Modal.Window>
          <Modal.Window name={`delete-section-${title}`}></Modal.Window>
        </Modal>
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
