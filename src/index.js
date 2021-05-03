import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./Components/GlobalStyle"


import HeroSection from "./Components/HeroSection";

import AboutUs from "./Components/AboutUs";
import OurPizzas  from "./Components/OurPizzas";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
    
      <HeroSection/>
      <AboutUs/>
      <OurPizzas/>
    
  </React.StrictMode>,
  document.getElementById("root")
);
