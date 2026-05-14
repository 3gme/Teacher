import { useQuery } from "@tanstack/react-query";
import { getCoursesApi } from "../../../services/apiCourses";

export default function useGetCourses() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["Courses"],
    queryFn: getCoursesApi,
    onSuccess: (data) => {
      console.log("----------------------");
      console.log("Courses fetched successfully", data);
      console.log("----------------------");
    },
    onError: (error) => {
      console.error("Failed to fetch courses", error);
    },
  });

  return { courses, isLoading };
}
