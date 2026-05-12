import Accordion from "./Accordion";
import Modal from "./Modal";
import SectionAdminHeader from "./SectionAdminHeader";
import SectionDeleteModal from "./SectionDeleteModal";
import SectionEditModal from "./SectionEditModal";

function SectionAdmin({ section }) {
  const editWindowName = `edit-section-${section.sectionId}`;
  const deleteWindowName = `delete-section-${section.sectionId}`;

  return (
    <Modal>
      <Accordion>
        <Accordion.Header>
          <SectionAdminHeader section={section} />
        </Accordion.Header>
        <Accordion.Content>content</Accordion.Content>
      </Accordion>

      <Modal.Window name={editWindowName}>
        <SectionEditModal section={section} />
      </Modal.Window>

      <Modal.Window name={deleteWindowName}>
        <SectionDeleteModal section={section} />
      </Modal.Window>
    </Modal>
  );
}

export default SectionAdmin;
