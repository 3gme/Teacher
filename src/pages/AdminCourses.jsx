import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import coursesData from "../data/CoursesData.json";
import CoursesSide from "../features/adminCourses/CoursesSide";
import Header from "../features/adminCourses/Header";
import CoursesMain from "../features/adminCourses/CoursesMain";

function getNextId(items, key) {
  return Math.max(0, ...items.map((item) => item[key] || 0)) + 1;
}

function AdminCourses() {
  const { selectedCourseId } = useSelector((state) => state.admin.selectedIds);
  const [courses, setCourses] = useState(coursesData);
  // const [selectedCourseId, setSelectedCourseId] = useState(
  //   coursesData[0]?.courseId,
  // );

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

  // if (!selectedCourse) {
  //   return (
  //     <section className="rounded-2xl border border-surface-200 bg-white p-6">
  //       <p className="text-sm text-ink-600">No course selected.</p>
  //     </section>
  //   );
  // }

  return (
    <section className="space-y-6">
      {/* Course Header */}
      <Header
        sectionCount={courseStats.sectionsCount}
        lessonCount={courseStats.lessonsCount}
      />

      <div className="grid gap-6 xl:grid-cols-[320px_1fr] pb-10">
        {/* Courses List */}
        <CoursesSide courses={courses} />

        <div className="space-y-6">
          <CoursesMain />
        </div>
      </div>
    </section>
  );
}

export default AdminCourses;
