import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/sign-in'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/delivery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pedidos
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/users' className='nav-links' onClick={closeMobileMenu}>
                Usuarios
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;