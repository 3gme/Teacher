import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import UserLessonCard from "./UserLessonCard";
import Accordion, { useAccordionContext } from "./Accordion";

function SectionHeader({ title }) {
  const { isOpen, toggle } = useAccordionContext();

  return (
    <div
      onClick={toggle}
      className="flex justify-between items-center p-4 cursor-pointer bg-secondary-50 hover:bg-secondary-100"
    >
      <h3 className="font-semibold text-secondary-700">{title}</h3>
      <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
  );
}

function SectionCard({ section, courseId }) {
  const { title, lessons = [] } = section;

  console.log(lessons);
  return (
    <div className="border overflow-hidden rounded-xl">
      <Accordion>
        {/* Section Header */}
        <Accordion.Header>
          <SectionHeader title={title} />
        </Accordion.Header>

        <Accordion.Content>
          {/* Lessons */}
          {lessons.length > 0 ? (
            <ul className="p-4 space-y-2">
              {lessons.map((lesson) => (
                <UserLessonCard
                  key={lesson.lessonId}
                  lesson={lesson}
                  courseId={courseId}
                />
              ))}
            </ul>
          ) : (
            <p className="p-4 text-md text-ink-500">
              No lessons available yet.
            </p>
          )}
        </Accordion.Content>
      </Accordion>
    </div>
  );
}

export default SectionCard;
