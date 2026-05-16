import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLessonApi } from "../../../services/apiCourses";

export default function useAddLesson(courseId, close) {
  const queryClient = useQueryClient();
  const { mutate: addLesson } = useMutation({
    mutationFn: addLessonApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["course", courseId] });
      console.log("Lesson Added Successfully");
      close();
    },
    onError: (error) => {
      console.error("Error adding lesson:", error);
    },
  });

  return { addLesson };
}
