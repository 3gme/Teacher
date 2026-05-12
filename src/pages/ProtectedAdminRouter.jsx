import { useGetUser } from "../features/auth/useGetUser";

function ProtectedAdminRouter({ children }) {
  const { mutate, ispending, error } = useGetUser();

  return children;
}

export default ProtectedAdminRouter;
