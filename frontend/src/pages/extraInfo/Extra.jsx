import React from "react";
import "./Extra.css";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

    

const Extra = () => {
    const navigate = useNavigate();
    const {home } = useAuth();

    const handleLogout = () => {
        if (home()) {
            navigate("/");
        }
    };

    return (
        <>
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1 className="dashboard-tittle">
                    ¡Bienvenido a Nuestra Página!
                </h1>
                <p className="dashboard-user">
                    Puedes acceder a más información si te registras
                </p>
                <button className="dashboard-button" onClick={handleLogout}>
                    Ingresar
                </button>
            </div>
        </div>
        </>
    );
};

export default Extra;