// src/pages/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>
      
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message:</label>
        <textarea placeholder="Enter your message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
