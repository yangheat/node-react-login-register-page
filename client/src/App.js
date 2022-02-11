import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LadingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import VidoeUploadPage from "./components/views/VidoeUploadPage/VidoeUploadPage";
import Auth from "./hoc/Auth";

export default function App() {
  const AuthLandingPage = Auth(LandingPage, true);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  const AuthVidoeUploadPage = Auth(VidoeUploadPage, true);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AuthLandingPage />} />
        <Route exact path="/login" element={<AuthLoginPage />} />
        <Route exact path="/register" element={<AuthRegisterPage />} />
        <Route exact path="/vidoeupload" element={<AuthVidoeUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}
