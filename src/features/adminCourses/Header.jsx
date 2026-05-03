function Header({ sectionCount, lessonCount }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-700">
          Course Manager
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink-900">
          Edit courses, sections, and lessons
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex gap-3 text-sm">
          <span className="rounded-xl bg-primary-50 px-4 py-2 font-semibold text-primary-700">
            {sectionCount} sections
          </span>
          <span className="rounded-xl bg-secondary-50 px-4 py-2 font-semibold text-secondary-700">
            {lessonCount} lessons
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
