import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLessonApi } from "../../../services/apiCourses";

export default function useDeleteLesson(courseId, close) {
  const queryClient = useQueryClient();

  const { mutate: deleteLesson, isPending } = useMutation({
    mutationFn: (lessonId) => deleteLessonApi(lessonId),
    onSuccess: (_, variables) => {
      console.log("Lesson deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["lesson", variables?.lessonId],
      });
      queryClient.invalidateQueries({
        queryKey: ["course", courseId],
      });
      close();
    },
    onError: (error) => {
      console.error("Failed to delete lesson:", error);
    },
  });
  return { deleteLesson, isPending };
}
