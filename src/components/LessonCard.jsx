function LessonCard({ lesson }) {
  const { title, orderIndex } = lesson;
  return (
    <li className="p-3 rounded-lg bg-surface-50 flex justify-between">
      <span className="text-ink-700">{title}</span>
      <span className="text-sm text-ink-400">Lesson {orderIndex}</span>
    </li>
  );
}

export default LessonCard;
