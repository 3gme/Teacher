// import { Navigate } from "react-router-dom";
// import { getUser } from "../../services/apiUser";

function ProtectedRouter({ children }) {
  // const userToken = JSON.parse(localStorage.getItem("sessionToken"));
  // console.log(`user token from protected route: ${userToken}`);

  // if (userToken === null) {
  //   return <Navigate to="/login" replace />;
  // }
  // getUser(userToken);
  return children;
}

export default ProtectedRouter;
