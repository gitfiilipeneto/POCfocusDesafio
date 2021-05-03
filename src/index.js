import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./Components/GlobalStyle"


import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
    
      <HeroSection/>
      <AboutUs/>
    
  </React.StrictMode>,
  document.getElementById("root")
);
