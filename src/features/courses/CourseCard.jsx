function CourseCard({ course }) {
  const { title, description, price, imageUrl, sections } = course;
  const lessonsCount = sections.reduce(
    (count, section) => count + section.lessons.length,
    0,
  );

  return (
    <li className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="aspect-16/10 w-full object-cover"
        />

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-ink-600">
            <span className="rounded-full bg-secondary-50 px-3 py-1 text-secondary-700">
              {sections.length} sections
            </span>
            <span className="rounded-full bg-surface-100 px-3 py-1 text-ink-700">
              {lessonsCount} lessons
            </span>
          </div>

          <h3 className="mb-2 text-xl font-semibold text-ink-900">{title}</h3>
          <p className="mb-6 flex-1 text-sm leading-6 text-ink-600">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-ink-500">
                Price
              </p>
              <span className="text-2xl font-semibold text-primary-700">
                ${price}
              </span>
            </div>

            <button className="rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-700">
              Enroll Now
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}

export default CourseCard;
