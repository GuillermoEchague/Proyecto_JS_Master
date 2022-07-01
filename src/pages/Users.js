import React from 'react'
import background from "../assets/images/users.png";
import HeroSection from '../components/HeroSection/HerosSection';
import Navbar from '../components/Navbar/Navbar';
import UsersList from '../components/UsersList/UsersList';


const Users = () => {
  return (
    <>
     <Navbar/>
    <HeroSection backgroundImage={background} text={'Usuarios'} />
    <UsersList />
    </>
  )
}

export default Users