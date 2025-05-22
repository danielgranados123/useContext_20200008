import { useState } from 'react'
import './App.css'
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from "./pages/information/Information.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Login from "./pages/login/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx"
import Extra from "./pages/extraInfo/Extra.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element ={<Login/>}/>
          <Route path="/extra" element ={<Extra/>}/>
            <Route element= {<PrivateRoute/>}>
              <Route path="/information" element ={<Information/>}/>
              <Route path="/dashboard" element ={<Dashboard/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
