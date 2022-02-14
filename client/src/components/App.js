import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./views/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LadingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import VideoUploadPage from "./views/VideoUploadPage/VideoUploadPage";
import Auth from "../hoc/Auth";

export default function App() {
  const AuthLandingPage = Auth(LandingPage, true);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  const AuthVideoUploadPage = Auth(VideoUploadPage, true);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<AuthLandingPage />} />
        <Route exact path="/login" element={<AuthLoginPage />} />
        <Route exact path="/register" element={<AuthRegisterPage />} />
        <Route exact path="/video/upload" element={<AuthVideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}
