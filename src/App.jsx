import React from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Dashboard from "./containers/Dashboard";
import LoginPage from "./containers/LoginPage";
import Footer from "./components/Footer";
import LabServicesPage from "./containers/LabServicesPage";
import CaregivingPage from "./containers/CaregivingPage";
import AboutUsPage from "./containers/AboutUsPage";
import HelpPage from "./containers/HelpPage";
import PageNotFound from "./containers/PageNotFound";
import RegisterPage from "./containers/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const location = useLocation();
  const { pathname } = location;
  const hasHeaderFooter = !["/login", "/register"].includes(pathname);
  return (
    <div className="App">
      <div className="container-fluid">
        <AuthProvider>
          {hasHeaderFooter ? <Header /> : ""}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/caregiving" element={<CaregivingPage />} />
            <Route path="/lab-services" element={<LabServicesPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {hasHeaderFooter ? <Footer /> : ""}
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;
