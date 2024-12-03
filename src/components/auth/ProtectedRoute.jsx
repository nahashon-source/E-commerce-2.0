import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Retrieve the token from Redux state to check if the user is authenticated
  const { token } = useSelector((state) => state.auth);
  
  // Get the current location to redirect the user back to the page they originally wanted to access
  const location = useLocation();

// If there's no token (i.e., user is not authenticated), redirect to login page
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the protected child components
  return children;
}

export default ProtectedRoute;
