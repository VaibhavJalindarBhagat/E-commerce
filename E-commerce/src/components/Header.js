import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path if needed

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Nursery Store Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
