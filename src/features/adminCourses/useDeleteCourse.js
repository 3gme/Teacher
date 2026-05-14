import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourseApi } from "../../../services/apiCourses";

export default function useDeleteCourse(close) {
  const queryClient = useQueryClient();
  const {
    mutate: deleteCourse,
    isPending,
    error,
  } = useMutation({
    mutationFn: (id) => deleteCourseApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Courses"] });
      console.log("course Delete successfully");
      close();
      console.log(close);
    },
    onError: (error) => {
      console.error("Failed to delete course", error);
      close();
    },
  });

  return { deleteCourse, isPending, error };
}
