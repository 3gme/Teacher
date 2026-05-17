import { useMutation } from "@tanstack/react-query";
import { refreshTokenApi } from "../../../services/apiUser";

export default function useRefreshToken() {
  const { mutateAsync: refreshUserToken, isPending } = useMutation({
    mutationFn: refreshTokenApi,
  });

  return { refreshUserToken, isPending };
}
