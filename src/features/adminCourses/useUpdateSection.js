import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSectionApi } from "../../../services/apiCourses";

export default function useUpdateSection(courseId, close) {
  const queryClient = useQueryClient();

  const { mutate: updateSection, isPending } = useMutation({
    mutationFn: updateSectionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["course", courseId],
      });
      queryClient.invalidateQueries({
        queryKey: ["Courses"],
      });
      close();
    },
    onError: (error) => {
      console.error("Error updating section:", error);
    },
  });

  return { updateSection, isPending };
}
