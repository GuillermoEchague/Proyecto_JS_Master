import React from 'react'
import HeroSection from '../components/HeroSection/HerosSection';
import background from "../assets/images/menu.png";
import Navbar from '../components/Navbar/Navbar';
const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection backgroundImage={background} text={'Menú'}/>
    </>
  )
}

export default Home