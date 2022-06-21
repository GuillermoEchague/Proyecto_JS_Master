import React from 'react'
import background from "../assets/images/users.png";
import HeroSection from '../components/HeroSection/HerosSection';
import Navbar from '../components/Navbar/Navbar';
const Users = () => {
  return (
    <>
     <Navbar/>
    <HeroSection backgroundImage={background} text={'Usuarios'} />
    </>
  )
}

export default Users