import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
    const isLoggedIn =true;//temporary hardcoded value, replace with actual authentication logic
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;