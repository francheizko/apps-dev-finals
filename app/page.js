// Home.js

import React from "react";
import FranzScreen from "./pages/components/FranzScreen";
import EvrylScreen from "./pages/components2/EvrylScreen";
import PearkieScreen from "./pages/components3/PearkieScreen";
import NavBar1 from "./pages/components/NavBar1";
import LandingPage2 from "./pages/components/LandingPage2";
import LandingPage from "./pages/components/LandingPage";
import Landing from "./pages/components/Text";
import NavBar2 from "./pages/components/NavBar2";
export default function Home() {
  return (
    <div>
      {
        //IF  THE ROUTING WONT WORK AFTER WE MERGE THE CHANGES PLEASE NAVIGATE
        //USING THIS CODES
        // <FranzScreen />
        //<EvrylScreen />
        //<PearkieScreen />
        // IF THE ROUTING WILL FAIL DISABLE THE CODE BELOW
        //  <NavBar1 />
        // <LandingPage2 />
        // <LandingPage />
      }
      <NavBar1 />
      <LandingPage2 />
      <LandingPage />
    </div>
  );
}
