import React, { useState } from 'react';
import "./Card.css"

const Form = ({ addProduct }) => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 100000) {
      setErrorMessage('Image size should be less than 100kb.');
    } else {
      setImage(file);
      setErrorMessage('');
    }
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!image || !productName || !price) {
      setErrorMessage('Please fill in all the fields.');
    } else {
      addProduct({
        image,
        name: productName,
        price: parseFloat(price),
      });
      setErrorMessage('');
      setImage(null);
      setProductName('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <input
        type="text"
        value={productName}
        onChange={handleProductNameChange}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={handlePriceChange}
        placeholder="Price"
        required
      />
      <button type="submit">Add Product</button>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </form>
  );
};

export default Form;
