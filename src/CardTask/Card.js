import React, { useState } from 'react';
import "./Card.css"

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(product.price);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    setAmount(amount + product.price);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setAmount(amount - product.price);
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <div className="quantity">
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <p>Amount: {amount}</p>
    </div>
  );
};

export default Card;
