import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import coursesData from "../../data/CoursesData.json";
import { updateCourse } from "./adminSlice";

const inputClass =
  "w-full rounded-xl border border-primary-100 bg-white px-3 py-2 text-sm text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100";

const labelClass = "mb-2 block text-xs font-semibold uppercase text-ink-500";

function CoursesMain() {
  const selectedCourse = useSelector(
    (state) => state.admin.selectedIds.courseId,
  );
  const dispatch = useDispatch();
  console.log(selectedCourse);

  const { title, imageUrl, price, description } =
    coursesData.find((course) => course.courseId === selectedCourse) || {};

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-ink-800">
          <FaEdit className="text-primary-600" />
          Course details
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <label>
            <span className={labelClass}>Title</span>
            <input
              value={title}
              onChange={(event) =>
                dispatch(
                  updateCourse({ field: "title", value: event.target.value }),
                )
              }
              className={inputClass}
            />
          </label>

          <label>
            <span className={labelClass}>Image URL</span>
            <input
              value={imageUrl}
              onChange={(event) =>
                dispatch(
                  updateCourse({
                    field: "imageUrl",
                    value: event.target.value,
                  }),
                )
              }
              className={inputClass}
            />
          </label>

          <label>
            <span className={labelClass}>Price</span>
            <input
              type="number"
              min="0"
              value={price}
              onChange={(event) =>
                dispatch(
                  updateCourse({ field: "price", value: event.target.value }),
                )
              }
              className={inputClass}
            />
          </label>

          <label className="lg:col-span-2">
            <span className={labelClass}>Description</span>
            <textarea
              value={description}
              onChange={(event) =>
                dispatch(
                  updateCourse({
                    field: "description",
                    value: event.target.value,
                  }),
                )
              }
              rows={3}
              className={`${inputClass} resize-none leading-6`}
            />
          </label>
        </div>
      </article>

      {/* <article className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink-900">
              Sections and lessons
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              Manage the content structure for this course.
            </p>
          </div>

          <button
            type="button"
            onClick={addSection}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            <FaPlus />
            Add section
          </button>
        </div>

        <div className="space-y-4">
          {selectedCourse.sections.map((section) => (
            <section
              key={section.sectionId}
              className="rounded-2xl border border-primary-100 bg-surface-50 p-4"
            >
              <div className="grid gap-3 lg:grid-cols-[1fr_120px_auto] lg:items-end">
                <label>
                  <span className={labelClass}>Section title</span>
                  <input
                    value={section.title}
                    onChange={(event) =>
                      updateSection(
                        section.sectionId,
                        "title",
                        event.target.value,
                      )
                    }
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className={labelClass}>Order</span>
                  <input
                    type="number"
                    min="1"
                    value={section.orderIndex}
                    onChange={(event) =>
                      updateSection(
                        section.sectionId,
                        "orderIndex",
                        event.target.value,
                      )
                    }
                    className={inputClass}
                  />
                </label>

                <button
                  type="button"
                  onClick={() => deleteSection(section.sectionId)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-100 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-ink-800">
                    Lessons
                  </h3>
                  <button
                    type="button"
                    onClick={() => addLesson(section.sectionId)}
                    className="inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-white transition hover:bg-secondary-700"
                  >
                    <FaPlus />
                    Add lesson
                  </button>
                </div>

                {section.lessons.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-surface-200 bg-white px-4 py-3 text-sm text-ink-500">
                    No lessons yet.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {section.lessons.map((lesson) => (
                      <div
                        key={lesson.lessonId}
                        className="grid gap-3 rounded-xl border border-surface-200 bg-white p-3 md:grid-cols-[1fr_100px_auto] md:items-end"
                      >
                        <label>
                          <span className={labelClass}>Lesson title</span>
                          <input
                            value={lesson.title}
                            onChange={(event) =>
                              updateLesson(
                                section.sectionId,
                                lesson.lessonId,
                                "title",
                                event.target.value,
                              )
                            }
                            className={inputClass}
                          />
                        </label>

                        <label>
                          <span className={labelClass}>Order</span>
                          <input
                            type="number"
                            min="1"
                            value={lesson.orderIndex}
                            onChange={(event) =>
                              updateLesson(
                                section.sectionId,
                                lesson.lessonId,
                                "orderIndex",
                                event.target.value,
                              )
                            }
                            className={inputClass}
                          />
                        </label>

                        <button
                          type="button"
                          onClick={() =>
                            deleteLesson(section.sectionId, lesson.lessonId)
                          }
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-100 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                        >
                          <FaTrash />
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </article> */}
    </div>
  );
}

export default CoursesMain;
