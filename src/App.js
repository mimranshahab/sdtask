import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import CalculatorDark from "./components/calculator-dark";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calculator" element={<CalculatorDark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
