import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function Shopping() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productName) => {
    console.log(productName);
    setCartItems([...cartItems, productName]);
  };

  return (
    <div>
      <h1>Shopping</h1>
      <Products addToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}
