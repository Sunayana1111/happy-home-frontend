import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Dashboard from "./containers/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <Dashboard/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
