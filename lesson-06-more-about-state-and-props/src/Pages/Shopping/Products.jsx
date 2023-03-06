import { useState } from "react";

export default function Products(props) {
  const [products, setProducts] = useState([
    {
      name: "Iphone 14",
    },
    {
      name: "Sammsung",
    },
  ]);

  const handleAddToCart = (productName) => {
    if (props.addToCart && typeof props.addToCart === "function") {
      props.addToCart(productName);
    }
  };

  return (
    <div>
      <h1>Products List</h1>
      <div onClick={() => handleAddToCart(products[0].name)}>
        {products[0].name}
      </div>
      <div onClick={() => handleAddToCart(products[1].name)}>
        {products[1].name}
      </div>
    </div>
  );
}
