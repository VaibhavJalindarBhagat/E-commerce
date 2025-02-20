// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
