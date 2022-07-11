import React from "react";
import HeroSection from "../components/HeroSection/HerosSection";
import background from "../assets/images/menu.png";
// import Navbar from "../components/Navbar/Navbar";
import CafeGrid from "../components/CafeGrid/CafeGrid";

const Home = () => {
  return (
    <>
      
      <HeroSection
        backgroundImage={background}
        text={"Menú"}
        link={"/sign-in"}
        buttonName={"Registro"}
      />
      <CafeGrid />
    </>
  );
};

export default Home;
