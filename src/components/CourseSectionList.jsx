import SectionCard from "./SectionCard";

function CourseSectionList({ sections, courseId }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-ink-800">
        Course Content
      </h2>

      {!sections || sections.length === 0 ? (
        <p className="text-ink-500">
          No sections available for this course yet.
        </p>
      ) : (
        <div className="space-y-4">
          {sections.map((section) => (
            <SectionCard key={section.sectionId} section={section} courseId={courseId} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseSectionList;
