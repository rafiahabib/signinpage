// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInEmail from "./pages/SignInEmail";
import SignInPassword from "./pages/SignInPassword";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignInEmail />} />
        <Route path="/signin/password" element={<SignInPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
