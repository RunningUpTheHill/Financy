// eslint-disable-next-line no-unused-vars
import React, {} from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import FinancePage from "./pages/FinancePage";
import Shopping from "./pages/Categories/Shopping";
import Groceries from "./pages/Categories/Groceries";
import Dining from "./pages/Categories/Dining";
import Utilities from "./pages/Categories/Utilities";
import Transportation from "./pages/Categories/Transportation";
import EverythingElse from "./pages/Categories/EverythingElse";


function App() {
    return (
        <div className="vh-100 gradient-custom">
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/FinancePage" element={<FinancePage />} />
                    <Route path="/Categories/Shopping" element={<Shopping />} />
                    <Route path="/Categories/Groceries" element={<Groceries />} />
                    <Route path="/Categories/Dining" element={<Dining />} />
                    <Route path="/Categories/Utilities" element={<Utilities />} />
                    <Route path="/Categories/Transportation" element={<Transportation />} />
                    <Route path="/Categories/EverythingElse" element={<EverythingElse />} />


                </Routes>
            </BrowserRouter>
        </div>
        </div>
    );
}

export default App;
