import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
    //temporary hardcoded value for isLoggedIn
    const isLoggedIn = true;

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    );
}

export default ProtectedRoutes;