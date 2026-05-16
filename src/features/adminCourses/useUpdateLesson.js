import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLessonApi } from "../../../services/apiCourses";

export default function useUpdateLesson(close) {
  const queryClient = useQueryClient();

  const { mutate: updateLesson, isPending } = useMutation({
    mutationFn: updateLessonApi,
    onSuccess: (_, variables) => {
      console.log("Lesson updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["lesson", variables.lessonId],
      });
      queryClient.invalidateQueries({
        queryKey: ["Courses"],
      });
      close();
    },
    onError: (error) => {
      console.error("Error updating lesson:", error);
    },
  });

  return { updateLesson, isPending };
}
