import React from 'react'
import background from "../assets/images/sesion.png";
import HeroSection from '../components/HeroSection/HerosSection';
import Navbar from '../components/Navbar/Navbar';
const SigIn = () => {
  return (
    <>
     <Navbar/>
    <HeroSection backgroundImage={background} text={'Iniciar Sesión'}/>
    </>
  
  )
}

export default SigIn