import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const PrivateRoute = () => {
    const { isLoggedIn } = useAuth();

    // Si no está autenticado, lo redirige al inicio
    return isLoggedIn ? <Outlet /> : <Navigate to= "/"/>;
};

export default PrivateRoute;