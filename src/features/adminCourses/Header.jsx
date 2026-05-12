function Header({ sectionCount, lessonCount }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-base font-semibold uppercase tracking-[0.14em] text-secondary-700">
          Course Manager
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-ink-900 md:text-4xl">
          Edit courses, sections, and lessons
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-3 text-base">
          <span className="rounded-xl bg-primary-50 px-4 py-2.5 font-semibold text-primary-700">
            {sectionCount} sections
          </span>
          <span className="rounded-xl bg-secondary-50 px-4 py-2.5 font-semibold text-secondary-700">
            {lessonCount} lessons
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
