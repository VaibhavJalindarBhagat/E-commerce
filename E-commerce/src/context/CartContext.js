// src/context/CartContext.js
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Create a Context
const CartContext = createContext();

// Custom Hook to use CartContext
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // To navigate after adding item to cart

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Redirect to Cart Page after adding
    navigate("/cart");
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate Grand Total
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, grandTotal }}>
      {children}
    </CartContext.Provider>
  );
};
