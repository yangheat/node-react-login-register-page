import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LadingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
