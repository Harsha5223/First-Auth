import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <h2>Access Denied ❌</h2>;
  }

  return children;
};

export default ProtectedRoute;
