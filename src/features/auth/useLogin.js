import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/apiUser";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: login,
    isPending: isLoading,
    data: user,
  } = useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      console.log("Login successful", data);
      queryClient.setQueryData(["user"], data);
      let tokenToStore = null;
      if (data && typeof data === "object") {
        tokenToStore = data.token || data.accessToken || null;
      }
      if (!tokenToStore) {
        tokenToStore = typeof data === "string" ? data : JSON.stringify(data);
      }
      localStorage.setItem("sessionToken", tokenToStore);
      navigate("/");
    },

    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  return { login, isLoading, user };
}
