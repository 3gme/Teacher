import { useDispatch } from "react-redux";
import Button from "./Button";
import Modal, { useModalContext } from "./Modal";
import { deleteSection } from "../features/adminCourses/adminSlice";

function SectionDeleteModal({ section }) {
  const dispatch = useDispatch();
  const { close } = useModalContext();

  const handleDelete = () => {
    dispatch(deleteSection(section.sectionId));
    close();
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-ink-900">Delete section</h2>
        <p className="mt-2 text-sm leading-6 text-ink-500">
          Are you sure you want to delete "{section.title}"? This action cannot
          be undone.
        </p>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Modal.Close>
          <Button type="secondary">Cancel</Button>
        </Modal.Close>
        <Button type="danger" onClick={handleDelete}>
          Delete section
        </Button>
      </div>
    </div>
  );
}

export default SectionDeleteModal;
