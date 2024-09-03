import React, { useContext } from "react";
import Context from "./context/Context";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./component/HomePage";

export default function App() {
  const { isLoggedIn } = useContext(Context);
  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Navigate to="/login" />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
