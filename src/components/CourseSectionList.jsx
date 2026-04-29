import SectionCard from "./SectionCard";

function CourseSectionList({ sections }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-ink-800">
        Course Content
      </h2>

      <div className="space-y-4">
        {sections.map((section) => (
          <SectionCard key={section.sectionId} section={section} />
        ))}
      </div>
    </div>
  );
}

export default CourseSectionList;
