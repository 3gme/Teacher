import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isPast } from "../../services/helpers";
import useRefreshToken from "../features/auth/useRefreshToken";

function ProtectedRouter({ children }) {
  const storedUser = localStorage.getItem("user");
  const { refreshUserToken, isPending } = useRefreshToken();
  const [authState, setAuthState] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function verifySession() {
      if (!storedUser) {
        if (!cancelled) {
          setAuthState("unauthenticated");
        }
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser);
        const refreshTokenExpiration = parsedUser?.refreshTokenExpiration;

        if (refreshTokenExpiration && isPast(refreshTokenExpiration)) {
          // localStorage.removeItem("user");
          // localStorage.removeItem("sessionToken");
          if (!cancelled) {
            setAuthState("unauthenticated");
          }
          return;
        }

        await refreshUserToken();

        if (!cancelled) {
          setAuthState("authenticated");
        }
      } catch (error) {
        console.error("Session refresh failed", error);
        // localStorage.removeItem("user");
        // localStorage.removeItem("sessionToken");
        if (!cancelled) {
          setAuthState("unauthenticated");
        }
      }
    }

    verifySession();

    return () => {
      cancelled = true;
    };
  }, [storedUser, refreshUserToken]);

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  if (authState === "loading" || isPending) {
    return <div>Loading...</div>;
  }

  if (authState === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRouter;
