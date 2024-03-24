import "./App.css";
import React from "react";
import Nav from "./Component/Navbar/Nav";
import Home from "./Component/Home/Home";
import Logo from "./Component/logo/logo";
import SERVICES from "./Component/SERVICES/SERVICES";
import Fleet from "./Component/Fleet/Fleet";
import SERVICES1 from "./Component/SERVICES1/SERVICES1";
import QUOTES from "./Component/QUOTES/QUOTES";
import BLOG from "./Component/BLOG/BLOG";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Sev from "./Component/Sev/Sev";
import CaseStudies from "./Component/Case Studies/Case Studies";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Nav /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Sev" element={<Sev />} />
          <Route path="/CaseStudies" element={<CaseStudies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
