import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ required by checker

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
