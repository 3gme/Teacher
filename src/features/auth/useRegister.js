import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../../services/apiUser";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const navigate = useNavigate();
  const { mutate: register, isPending } = useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      navigate("/");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });

  return { register, isPending };
}
