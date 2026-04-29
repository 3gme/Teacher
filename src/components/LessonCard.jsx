import { useNavigate } from "react-router-dom";

function LessonCard({ lesson }) {
  const { title, orderIndex, lessonId } = lesson;
  const navigate = useNavigate();

  // TODO: Implement navigation to lesson details page
  const handleClick = () => {
    console.log(`Navigate to lesson: ${title}`);
    navigate(`${lessonId}?title=${encodeURIComponent(title)}`);
  };
  return (
    <li
      className="p-3 rounded-lg bg-surface-50 flex justify-between hover:bg-surface-200 transition-colors duration-100 cursor-pointer"
      onClick={handleClick}
    >
      <span className="text-ink-700">{title}</span>
      <span className="text-sm text-ink-400">Lesson {orderIndex}</span>
    </li>
  );
}

export default LessonCard;
