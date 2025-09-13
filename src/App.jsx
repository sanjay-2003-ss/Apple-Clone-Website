import Navbar from "./components/Navbar"
import HeroSection from "./components/Hero";
import VideoHero from "./components/Videohero";
import IphoneAirHero from "./components/Iphoneair";
import Iphone17Hero from "./components/Iphone17";
import AirpodHero from "./components/Airpods";
import Watch from "./components/Watchse";
import Watchultra from "./components/Watchultra";
import Ipad from "./components/Ipad";
import AppleFooter from "./components/Footer";
import React, { useState } from "react";

function App() {
 

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <VideoHero/>
     <IphoneAirHero/>
     <Iphone17Hero/>
     <AirpodHero/>
     <Watch/>
     <Watchultra/>
     <Ipad/>
     <AppleFooter/>
    </>
  )
}

export default App

