import { useState } from "react";

export default function Cart(props) {
  return (
    <div>
      <h1>Cart item</h1>
      {props.cartItems.length > 0 && (
        <div>
          <div>{props.cartItems[0]}</div>
          <div>{props.cartItems[1]}</div>
        </div>
      )}
    </div>
  );
}
