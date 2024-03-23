import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Dashboard from "./containers/Dashboard";
import LoginPage from "./containers/LoginPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
