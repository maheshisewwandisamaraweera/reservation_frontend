import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import ForgetPassword from "./components/ForgetPassword"
import OTPSuccessPage from "./components/OtpSuccess"
import EnterOtp from "./components/EnterOtp"
import ResetPassword from "./components/ResetPassword"
import HomePage from "./components/Home"
//import About from "./components/About"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/otp-success" element={<OTPSuccessPage />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<HomePage />} />
        

      </Routes>
    </Router>
  );
};

export default App;






