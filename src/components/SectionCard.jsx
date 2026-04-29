import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import LessonCard from "./LessonCard";

function SectionCard({ section }) {
  const [openSection, setOpenSection] = useState(false);
  const { title, lessons } = section;
  console.log("front");
  return (
    <div className="border overflow-hidden rounded-xl">
      {/* Section Header */}
      <div
        onClick={() => setOpenSection((isOpenNow) => !isOpenNow)}
        className="flex justify-between items-center p-4 cursor-pointer bg-secondary-50 hover:bg-secondary-100"
      >
        <h3 className="font-semibold text-secondary-700">{title}</h3>
        <span>{!openSection ? <FaChevronDown /> : <FaChevronUp />}</span>
      </div>

      {/* Lessons */}
      {openSection &&
        (lessons.length > 0 ? (
          <ul className="p-4 space-y-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.lessonId} lesson={lesson} />
            ))}
          </ul>
        ) : (
          <p className="p-4 text-md text-ink-500">No lessons available yet.</p>
        ))}
    </div>
  );
}

export default SectionCard;
