
import "../styles/styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer.js";
import Home from "../pages/Home";
import About from "../pages/About";
import Writing from "../pages/Writing";
import Contact from "../pages/Contact";
import NavBar from "../components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="writing" element={<Writing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
