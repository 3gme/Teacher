import { useMemo, useState } from "react";
import { FaBookOpen, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import coursesData from "../data/CoursesData.json";

const inputClass =
  "w-full rounded-xl border border-primary-100 bg-white px-3 py-2 text-sm text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100";

const labelClass = "mb-2 block text-xs font-semibold uppercase text-ink-500";

function getNextId(items, key) {
  return Math.max(0, ...items.map((item) => item[key] || 0)) + 1;
}

function AdminCourses() {
  const [courses, setCourses] = useState(coursesData);
  const [selectedCourseId, setSelectedCourseId] = useState(
    coursesData[0]?.courseId,
  );

  const selectedCourse = useMemo(
    () => courses.find((course) => course.courseId === selectedCourseId),
    [courses, selectedCourseId],
  );

  const courseStats = useMemo(() => {
    const sectionsCount = selectedCourse?.sections.length || 0;
    const lessonsCount =
      selectedCourse?.sections.reduce(
        (total, section) => total + section.lessons.length,
        0,
      ) || 0;

    return { sectionsCount, lessonsCount };
  }, [selectedCourse]);

  function updateCourse(field, value) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.courseId === selectedCourseId
          ? {
              ...course,
              [field]: field === "price" ? Number(value) : value,
            }
          : course,
      ),
    );
  }

  function addSection() {
    setCourses((currentCourses) =>
      currentCourses.map((course) => {
        if (course.courseId !== selectedCourseId) return course;

        const nextOrder = course.sections.length + 1;

        return {
          ...course,
          sections: [
            ...course.sections,
            {
              sectionId: getNextId(course.sections, "sectionId"),
              title: `New section ${nextOrder}`,
              orderIndex: nextOrder,
              lessons: [],
            },
          ],
        };
      }),
    );
  }

  function updateSection(sectionId, field, value) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.courseId === selectedCourseId
          ? {
              ...course,
              sections: course.sections.map((section) =>
                section.sectionId === sectionId
                  ? {
                      ...section,
                      [field]: field === "orderIndex" ? Number(value) : value,
                    }
                  : section,
              ),
            }
          : course,
      ),
    );
  }

  function deleteSection(sectionId) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.courseId === selectedCourseId
          ? {
              ...course,
              sections: course.sections.filter(
                (section) => section.sectionId !== sectionId,
              ),
            }
          : course,
      ),
    );
  }

  function addLesson(sectionId) {
    setCourses((currentCourses) =>
      currentCourses.map((course) => {
        if (course.courseId !== selectedCourseId) return course;

        return {
          ...course,
          sections: course.sections.map((section) => {
            if (section.sectionId !== sectionId) return section;

            const nextOrder = section.lessons.length + 1;

            return {
              ...section,
              lessons: [
                ...section.lessons,
                {
                  lessonId: getNextId(section.lessons, "lessonId"),
                  title: `New lesson ${nextOrder}`,
                  orderIndex: nextOrder,
                },
              ],
            };
          }),
        };
      }),
    );
  }

  function updateLesson(sectionId, lessonId, field, value) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.courseId === selectedCourseId
          ? {
              ...course,
              sections: course.sections.map((section) =>
                section.sectionId === sectionId
                  ? {
                      ...section,
                      lessons: section.lessons.map((lesson) =>
                        lesson.lessonId === lessonId
                          ? {
                              ...lesson,
                              [field]:
                                field === "orderIndex" ? Number(value) : value,
                            }
                          : lesson,
                      ),
                    }
                  : section,
              ),
            }
          : course,
      ),
    );
  }

  function deleteLesson(sectionId, lessonId) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.courseId === selectedCourseId
          ? {
              ...course,
              sections: course.sections.map((section) =>
                section.sectionId === sectionId
                  ? {
                      ...section,
                      lessons: section.lessons.filter(
                        (lesson) => lesson.lessonId !== lessonId,
                      ),
                    }
                  : section,
              ),
            }
          : course,
      ),
    );
  }

  if (!selectedCourse) {
    return (
      <section className="rounded-2xl border border-surface-200 bg-white p-6">
        <p className="text-sm text-ink-600">No course selected.</p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-700">
            Course Manager
          </p>
          <h1 className="mt-2 text-3xl font-bold text-ink-900">
            Edit courses, sections, and lessons
          </h1>
        </div>

        <div className="flex gap-3 text-sm">
          <span className="rounded-xl bg-primary-50 px-4 py-2 font-semibold text-primary-700">
            {courseStats.sectionsCount} sections
          </span>
          <span className="rounded-xl bg-secondary-50 px-4 py-2 font-semibold text-secondary-700">
            {courseStats.lessonsCount} lessons
          </span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <aside className="rounded-2xl border border-surface-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink-800">
            <FaBookOpen className="text-primary-600" />
            Courses
          </div>

          <div className="space-y-2">
            {courses.map((course) => {
              const isSelected = course.courseId === selectedCourseId;

              return (
                <button
                  key={course.courseId}
                  type="button"
                  onClick={() => setSelectedCourseId(course.courseId)}
                  className={`w-full rounded-xl border p-3 text-left transition ${
                    isSelected
                      ? "border-primary-200 bg-primary-50"
                      : "border-transparent bg-surface-50 hover:border-primary-100 hover:bg-white"
                  }`}
                >
                  <span className="block text-sm font-semibold text-ink-900">
                    {course.title}
                  </span>
                  <span className="mt-1 block text-xs text-ink-500">
                    {course.sections.length} sections
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

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
                  value={selectedCourse.title}
                  onChange={(event) => updateCourse("title", event.target.value)}
                  className={inputClass}
                />
              </label>

              <label>
                <span className={labelClass}>Image URL</span>
                <input
                  value={selectedCourse.imageUrl}
                  onChange={(event) =>
                    updateCourse("imageUrl", event.target.value)
                  }
                  className={inputClass}
                />
              </label>

              <label>
                <span className={labelClass}>Price</span>
                <input
                  type="number"
                  min="0"
                  value={selectedCourse.price}
                  onChange={(event) => updateCourse("price", event.target.value)}
                  className={inputClass}
                />
              </label>

              <label className="lg:col-span-2">
                <span className={labelClass}>Description</span>
                <textarea
                  value={selectedCourse.description}
                  onChange={(event) =>
                    updateCourse("description", event.target.value)
                  }
                  rows={3}
                  className={`${inputClass} resize-none leading-6`}
                />
              </label>
            </div>
          </article>

          <article className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
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
          </article>
        </div>
      </div>
    </section>
  );
}

export default AdminCourses;
