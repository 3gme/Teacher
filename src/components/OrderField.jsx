import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateLesson,
  updateSection,
} from "../features/adminCourses/adminSlice";

function OrderField({ section, lesson }) {
  const dispatch = useDispatch();
  const currentIndex = section ? section.orderIndex : lesson.orderIndex;
  const [orderIndex, setOrderIndex] = useState(currentIndex);

  const commitChange = () => {
    const nextOrderIndex = Number(orderIndex);

    if (!Number.isFinite(nextOrderIndex) || nextOrderIndex < 1) {
      setOrderIndex(currentIndex);
      return;
    }

    if (nextOrderIndex === currentIndex) return;

    section &&
      dispatch(
        updateSection({
          sectionId: section.sectionId,
          title: section.title,
          orderIndex: nextOrderIndex,
        }),
      );

    lesson &&
      dispatch(
        updateLesson({
          lessonId: lesson.lessonId,
          title: lesson.title,
          orderIndex: nextOrderIndex,
        }),
      );
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-base font-medium text-ink-700">Order</span>
      <input
        type="number"
        value={orderIndex}
        onChange={(event) => setOrderIndex(event.target.value)}
        onBlur={commitChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.currentTarget.blur();
          }
        }}
        className="h-12 w-24 rounded-xl border border-primary-100 bg-white px-4 text-base font-medium text-ink-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-100"
        aria-label={`Change order for ${section ? section.title : lesson.title}`}
      />
    </div>
  );
}

export default OrderField;
