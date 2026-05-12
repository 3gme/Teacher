import Modal from "./Modal";
import { FaEdit, FaTrash } from "react-icons/fa";

function SectionAdminHeader({ section }) {
  const editWindowName = `edit-section-${section.sectionId}`;
  const deleteWindowName = `delete-section-${section.sectionId}`;

  return (
    <div className="grid grid-cols-[auto_auto] items-center">
      <h3 className="text-lg font-medium text-ink-800 flex items-center gap-2">
        <span className="rounded-xl bg-primary-200 flex items-center justify-center w-8 h-8 text-lg font-bold text-ink-700">
          {section.orderIndex}
        </span>
        {section.title}
      </h3>
      <div className="justify-self-end flex items-center">
        <Modal.Open opens={editWindowName}>
          <button
            type="button"
            className="ml-4 flex items-center gap-1 rounded-md border border-primary-500 px-3 py-2 text-base text-primary-500 transition hover:bg-primary-100 hover:text-primary-600"
            aria-label={`Edit ${section.title}`}
          >
            <FaEdit />
            Edit
          </button>
        </Modal.Open>
        <Modal.Open opens={deleteWindowName}>
          <button
            type="button"
            className="ml-4 flex items-center gap-1 rounded-md border border-red-500 px-3 py-2 text-base text-red-500 transition hover:bg-red-100 hover:text-red-600"
            aria-label={`Delete ${section.title}`}
          >
            <FaTrash />
            Delete
          </button>
        </Modal.Open>
      </div>
    </div>
  );
}

export default SectionAdminHeader;
