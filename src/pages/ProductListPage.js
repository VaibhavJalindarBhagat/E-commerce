// src/pages/ProductListPage.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import Cart Context

import A from "../assets/images/photo-1578998323870-83a9a3d609e5.avif";
import B from "../assets/images/photo-1610395219791-21b0353e43cb.avif";     
import C from "../assets/images/photo-1582150264904-e0bea5ef0ad1.avif";
import D from "../assets/images/photo-1587925358603-c2eea5305bbc.avif";   
import E from "../assets/images/1000_F_186857190_s4dfc0wfT6jcEcr7e3vzrFuUdysg6Gpp.jpg";   
import F from "../assets/images/smart-watch-realistic-image-black_1284-11873.jpg";   
import G from "../assets/images/pexels-ferarcosn-190819.jpg";   
import H from "../assets/images/photo-1577993944451-f8618a835822.avif";   

const products = [
  { id: 1, name: "Titan", price: 999, image: A },
  { id: 2, name: "Invicta", price: 1200, image: B },
  { id: 3, name: "Timex", price: 1499, image: C },
  { id: 4, name: "Reboot", price: 1199, image: D },
  { id: 5, name: "Fastrack Silver & Gold", price: 1199, image: E },
  { id: 6, name: "Smartwatch", price: 669, image: F },
  { id: 7, name: "Sonata", price: 949, image: G },
  { id: 8, name: "Current", price: 979, image: H },
  
];

// Product Card Component
const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Use Cart Context

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

// Product List Page Component
const ProductListPage = () => {
  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
