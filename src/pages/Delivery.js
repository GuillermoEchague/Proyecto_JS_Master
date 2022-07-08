import React , {useState, useEffect} from "react";
import background from "../assets/images/pedidos.png";
import HeroSection from "../components/HeroSection/HerosSection";
import Navbar from "../components/Navbar/Navbar";
import Orders from "../components/Orders/Orders";
import PickUp from "../components/PickUp/PickUp";
import { base_url } from "../constants/constantes";
const Delivery = () => {

  

  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage={background}
        text={"Pedidos"}
        link={"/users"}
        buttonName={"Usuarios"}
      />
      <Orders />
      <PickUp />
    </>
  );
};

export default Delivery;
