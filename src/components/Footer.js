// src/components/Footer.js
import React from 'react';
import { FaWhatsapp, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>© 2025 E-Commerce - All Rights Reserved</p>
      <div className="social-icons">
        <a href="https://wa.me/+9112345467890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
