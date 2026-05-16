import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";

function AdminActions({ section, lesson }) {
  const currentTitle = section ? section.title : lesson.title;
  const editWindowName = `edit-section-${currentTitle}`;
  const deleteWindowName = `delete-section-${currentTitle}`;

  return (
    <div className="flex items-center gap-3">
      <Modal.Open opens={editWindowName}>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-100 text-primary-700 transition hover:bg-primary-50"
          aria-label={`Edit ${currentTitle}`}
        >
          <FaEdit />
        </button>
      </Modal.Open>
      <Modal.Open opens={deleteWindowName}>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 text-red-600 transition hover:bg-red-50"
          aria-label={`Delete ${currentTitle}`}
        >
          <FaTrash />
        </button>
      </Modal.Open>
    </div>
  );
}

export default AdminActions;
