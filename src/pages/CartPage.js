// src/pages/CartPage.js
import React from "react";
import { useCart } from "../context/CartContext"; // Import Cart Context

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cart data & remove function

  // Calculate Grand Total
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.quantity} x Rs.{item.price}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Grand Total */}
          <div className="cart-summary">
            <h3>Grand Total: Rs.{grandTotal}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
