import React from 'react';
import "./Card.css"

const Table = ({ products }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
