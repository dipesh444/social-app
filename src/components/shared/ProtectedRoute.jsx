import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();

  console.log(user)
  if (isLoading) {
    // Optional: Add a loader while checking authentication
    return <div>Loading...</div>;
  }

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected page if authenticated
}

export default ProtectedRoute;
