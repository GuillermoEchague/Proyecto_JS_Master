import React from 'react'
import background from "../assets/images/pedidos.png";
import HeroSection from '../components/HeroSection/HerosSection';
import Navbar from '../components/Navbar/Navbar';
import Orders from '../components/Orders/Orders';
const Delivery = () => {
  return (
    <>
     <Navbar />
    <HeroSection backgroundImage={background} text={'Pedidos'}/>
    <Orders />
    </>
  )
}

export default Delivery