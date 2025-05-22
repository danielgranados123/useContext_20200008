import React from "react";
import "./Dashboard.css";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        if (logOut()) {
            navigate("/");
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1 className="dashboard-tittle">
                    ¡Bienvenido al Dashboard!
                </h1>
                <p className="dashboard-user">
                    Hola, <span>{user || "Usuario logueado"}</span>
                </p>
                <button className="dashboard-button" onClick={handleLogout}>
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
};

export default Dashboard;