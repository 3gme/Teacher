import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../../../services/apiUser";
import { useNavigate } from "react-router-dom";

export function useGetUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, ispending, error, data } = useMutation({
    mutationFn: (token) => getUser(token),

    onSuccess: (data) => {
      console.log(`user data from useGetUser: ${data}`);
      // localStorage.setItem("user", JSON.stringify(data));
      queryClient.setQueryData(["user"], data);
    },
    onError: (error) => {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("sessionToken");
      navigate("/login");
    },
  });
  return { mutate, ispending, error, data };
}
