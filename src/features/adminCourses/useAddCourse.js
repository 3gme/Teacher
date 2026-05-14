import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCourseApi } from "../../../services/apiCourses";

function useAddCourse(close, reset) {
  const queryClient = useQueryClient();

  const {
    mutate: addCourse,
    isPending,
    error,
  } = useMutation({
    mutationFn: addCourseApi,

    onSuccess: (data) => {
      console.log("Course added successfully", data);
      queryClient.invalidateQueries({ queryKey: ["Courses"] });

      if (reset) reset();
      if (close) close();
    },
    onError: (error) => {
      console.error("Failed to add course", error);
      if (reset) reset();
      if (close) close();
    },
  });

  return { addCourse, isPending, error };
}
export default useAddCourse;
