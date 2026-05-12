import AddSection from "./AddSection";

function SectionsAndLessonsHeader({ sectionsCount }) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-xl font-semibold leading-tight text-ink-900">
          Section{sectionsCount !== 1 ? "s" : ""}{" "}
          <span className="rounded-2xl bg-primary-200 px-3 py-2 text-lg font-bold text-ink-700">
            {sectionsCount}
          </span>
        </h2>
      </div>
      <AddSection />
    </div>
  );
}

export default SectionsAndLessonsHeader;
