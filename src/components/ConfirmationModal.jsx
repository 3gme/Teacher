import Button from "./Button";
import Modal from "./Modal";

function ConfirmationModal({ Header, message, ButtonContent, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-ink-900">{Header}</h2>
        <p className="mt-2 text-sm leading-6 text-ink-500">{message}</p>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Modal.Close>
          <Button type="secondary">Cancel</Button>
        </Modal.Close>
        <Button type="danger" onClick={handleDelete}>
          {ButtonContent}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
