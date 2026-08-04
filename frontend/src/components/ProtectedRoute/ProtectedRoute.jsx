import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {

  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {

    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary"></div>
      </div>
    );

  }

  if (!user) {

    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );

  }

  if (user.role !== "admin") {

    return <Navigate to="/" replace />;

  }

  return children;

}

export default ProtectedRoute;