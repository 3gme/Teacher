import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCourseApi } from "../../../services/apiCourses";

export default function useUpdateCourse(close) {
  const queryClient = useQueryClient();
  const { mutate: updateCourse, ispending } = useMutation({
    mutationFn: (courseData) => updateCourseApi(courseData),
    onSuccess: () => {
      console.log("Course updated successfully");
      queryClient.invalidateQueries({ queryKey: ["Courses"] });
      close();
    },
    onError: (error) => {
      console.error("Failed to update course:", error);
    },
  });

  return { updateCourse, ispending };
}
