// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the E-Commerce!</h1>
      
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default HomePage;  