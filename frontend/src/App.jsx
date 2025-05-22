import { useState } from 'react'
import './App.css'
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from "./pages/information/Information.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Login from "./pages/login/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element ={<Login/>}/>
            <Route path="/information" element ={<Information/>}/>
            <Route path="/dashboard" element ={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
