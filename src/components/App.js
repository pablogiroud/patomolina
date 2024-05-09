import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar.js";
import Footer from "./Footer.js";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import NextShows from "../pages/NextShows.jsx";
import Contact from "../pages/Contact.jsx";
import "../styles/styles.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="nextShows" element={<NextShows />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
