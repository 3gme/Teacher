import { FaPlus } from "react-icons/fa";
import Button from "./Button";
import Modal from "./Modal";
import AddSectionForm from "./AddSectionForm";

function AddSection() {
  return (
    <>
      <Modal.Open opens="addSectionFrom">
        <Button className="flex items-center gap-2">
          <FaPlus />
          Add section
        </Button>
      </Modal.Open>
      <Modal.Window name="addSectionFrom">
        <AddSectionForm />
      </Modal.Window>
    </>
  );
}

export default AddSection;
