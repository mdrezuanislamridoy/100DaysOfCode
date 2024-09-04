import React from "react";
import Header from "./Components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
