import Accordion from "./Accordion";
import Modal from "./Modal";
import SectionAdminHeader from "./SectionAdminHeader";
import SectionDeleteModal from "./SectionDeleteModal";
import EditModal from "./EditModal";
import SectionLessonsList from "./SectionLessonsList";

function SectionAdmin({ section }) {
  const editWindowName = `edit-section-${section.title}`;
  const deleteWindowName = `delete-section-${section.title}`;
  return (
    <Modal>
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
          <SectionDeleteModal section={section} />
        </Modal.Window>
      </Accordion>
    </Modal>
  );
}

export default SectionAdmin;
