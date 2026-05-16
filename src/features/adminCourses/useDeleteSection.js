import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSectionApi } from "../../../services/apiCourses";

export default function useDeleteSection(close) {
  const queryClient = useQueryClient();

  const { mutate: deleteSection, isPending } = useMutation({
    mutationFn: ({ courseId, sectionId }) =>
      deleteSectionApi(courseId, sectionId),
    onSuccess: (_, variables) => {
      console.log("Section deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["course", variables?.courseId],
      });
      queryClient.invalidateQueries({ queryKey: ["Courses"] });
      close();
    },
    onError: (error) => {
      console.error("Failed to delete section:", error);
    },
  });
  return { deleteSection, isPending };
}
