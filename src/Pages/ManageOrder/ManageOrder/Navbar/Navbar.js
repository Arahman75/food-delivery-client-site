import { Container } from '@mui/system';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <Container>
         <nav className='navbar'>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/delivery">Delivery</a>
       </nav>
      </Container>
    );
};

export default Navbar;