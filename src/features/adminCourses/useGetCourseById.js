import { useQuery } from "@tanstack/react-query";
import { getCourseByIdApi } from "../../../services/apiCourses";

export default function useGetCourseById(courseId) {
  const {
    data: course,
    isPending,
    error,
  } = useQuery({
    queryKey: ["course", courseId],
    queryFn: () => getCourseByIdApi(courseId),
    onError: (error) => {
      console.error("Failed to fetch course:", error);
    },
  });
  return { course, isPending, error };
}
