import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalContext } from "../../components/Modal";
import { addSectionApi } from "../../../services/apiCourses";

export default function useAddSection() {
  const queryClient = useQueryClient();
  const { close } = useModalContext();

  const { mutate: addSection, isPending } = useMutation({
    mutationFn: (sectionData) => addSectionApi(sectionData),
    onSuccess: () => {
      console.log("Section added successfully");
      queryClient.invalidateQueries("courses");
      close();
    },
    onError: (error) => {
      console.error("Failed to add section:", error);
    },
  });
  return { addSection, isPending };
}
