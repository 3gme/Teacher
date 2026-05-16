import { useQuery } from "@tanstack/react-query";
import { getLessonByIdApi } from "../../../services/apiCourses";

export default function useGetLessonById(lessonId) {
  const {
    data: lesson,
    isPending,
    error,
  } = useQuery({
    queryKey: ["lesson", lessonId],
    queryFn: () => getLessonByIdApi(lessonId),
    enabled: Boolean(lessonId),
    onError: (error) => {
      console.error("Failed to fetch lesson:", error);
    },
  });
  return { lesson, isPending, error };
}
