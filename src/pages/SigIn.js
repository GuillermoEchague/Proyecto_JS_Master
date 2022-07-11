import React from "react";
import background from "../assets/images/sesion.png";
import HeroSection from "../components/HeroSection/HerosSection";
// import Login from '../components/Login/Login';
import LoginForm from "../components/LoginForm/LoginForm";

// import Navbar from "../components/Navbar/Navbar";
const SigIn = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection
        backgroundImage={background}
        text={"Iniciar Sesión"}
        link={"/"}
        buttonName={"Menú"}
      />
      <LoginForm />
    </>
  );
};

export default SigIn;
