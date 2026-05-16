import { useSearchParams } from "react-router-dom";
import useDeleteSection from "../features/adminCourses/useDeleteSection";
import Accordion from "./Accordion";
import ConfirmationModal from "./ConfirmationModal";
import EditModal from "./EditModal";
import Modal, { useModalContext } from "./Modal";
import SectionAdminHeader from "./SectionAdminHeader";
import SectionLessonsList from "./SectionLessonsList";

function SectionAdmin({ section }) {
  const { close } = useModalContext();
  const editWindowName = `edit-section-${section.title}`;
  const deleteWindowName = `delete-section-${section.title}`;
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  const sectionId = section.sectionId;
  const { deleteSection } = useDeleteSection(close);

  const handleDelete = () => {
    // Implement delete logic here, e.g., call the deleteSection mutation
    console.log(`Deleting section: ${section.title}`);
    deleteSection({ courseId, sectionId });
  };

  return (
    <Accordion>
      <div className="rounded-2xl border border-primary-100 bg-white shadow-sm">
        <Accordion.Header>
          <SectionAdminHeader section={section} />
        </Accordion.Header>
        <Accordion.Content>
          <SectionLessonsList lessons={section.lessons} />
        </Accordion.Content>
      </div>

      <Modal.Window name={editWindowName}>
        <EditModal section={section} />
      </Modal.Window>

      <Modal.Window name={deleteWindowName}>
        <ConfirmationModal
          Header="Delete Section"
          message={`Are you sure you want to delete "${section.title}"? This action cannot be undone.`}
          ButtonContent="Delete Section"
          onClick={handleDelete}
        />
      </Modal.Window>
    </Accordion>
  );
}

export default SectionAdmin;
