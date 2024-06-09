import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RegistrationForm from "./components/Registration";
const App=()=>
  {
    return(
     
      <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6 lg:flex lg:items-center lg:justify-between">
  <HeroSection className="lg:w-1/2 w-full" />
  <RegistrationForm className="lg:w-1/2 w-full" />
</div>


    
      </>
    )
  }
  export default App