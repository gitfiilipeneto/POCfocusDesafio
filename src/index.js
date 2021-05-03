import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./Components/GlobalStyle"


import HeroSection from "./Components/HeroSection";

import AboutUs from "./Components/AboutUs";
import OurPizzas  from "./Components/OurPizzas";
import Footer from "./Components/Footer";


ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
    
      <HeroSection/>
      <AboutUs/>
      <OurPizzas/>
      <Footer/>    
  </React.StrictMode>,
  document.getElementById("root")
);
