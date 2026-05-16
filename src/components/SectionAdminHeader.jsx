import { useAccordionContext } from "./Accordion";
import AdminActions from "./AdminActions";
// import OrderField from "./OrderField";
import { FaChevronDown } from "react-icons/fa";

function SectionAdminHeader({ section }) {
  const { isOpen, toggle } = useAccordionContext();
  return (
    <div className="grid sm:grid-cols-[1fr_auto] items-center gap-4 px-5 py-4">
      <h3 className="flex items-center gap-3 text-lg font-medium text-ink-800">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-200 text-lg font-bold text-ink-700">
          {section.orderIndex}
        </span>
        {section.title}
      </h3>
      <div className="flex items-center gap-3">
        {/* <OrderField section={section} /> */}
        <AdminActions section={section} />
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
    </div>
  );
}

export default SectionAdminHeader;
