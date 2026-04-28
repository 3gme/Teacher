import CourseCard from "../features/courses/CourseCard";

const courses = [
  {
    courseId: 1,
    title: "Classroom Management Essentials",
    description:
      "Practical routines, behavior systems, and lesson flow ideas for calmer, more focused classrooms.",
    price: 100,
    imageUrl: "https://placehold.co/600x400?text=Classroom+Management",
    sections: [
      {
        sectionId: 1,
        title: "Daily routines",
        orderIndex: 1,
        lessons: [
          {
            lessonId: 1,
            title: "Start strong every morning",
            orderIndex: 1,
          },
        ],
      },
      {
        sectionId: 2,
        title: "Behavior support",
        orderIndex: 2,
        lessons: [],
      },
    ],
  },
  {
    courseId: 2,
    title: "Creative English Activities",
    description:
      "Speaking games, vocabulary practice, and low-prep classroom activities to keep students engaged.",
    price: 85,
    imageUrl: "https://placehold.co/600x400?text=English+Activities",
    sections: [
      {
        sectionId: 1,
        title: "Warm-up games",
        orderIndex: 1,
        lessons: [
          {
            lessonId: 1,
            title: "Fast conversation starters",
            orderIndex: 1,
          },
        ],
      },
      {
        sectionId: 2,
        title: "Group activities",
        orderIndex: 2,
        lessons: [],
      },
    ],
  },
  {
    courseId: 3,
    title: "Digital Tools for Teachers",
    description:
      "Use modern apps and AI-assisted workflows to plan lessons, track progress, and save preparation time.",
    price: 120,
    imageUrl: "https://placehold.co/600x400?text=Digital+Tools",
    sections: [
      {
        sectionId: 1,
        title: "Planning tools",
        orderIndex: 1,
        lessons: [
          {
            lessonId: 1,
            title: "Build a smart weekly plan",
            orderIndex: 1,
          },
        ],
      },
      {
        sectionId: 2,
        title: "Student feedback",
        orderIndex: 2,
        lessons: [],
      },
    ],
  },
];

function Courses() {
  return (
    <section className="min-h-screen bg-surface px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-secondary-700">
            Courses
          </span>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Grow your teaching skills with short, practical programs
          </h1>
          <p className="max-w-3xl text-sm leading-6 text-ink-600 sm:text-base">
            Explore flexible courses designed for teachers who want useful ideas
            they can apply in real classrooms right away.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Courses;
