import React from 'react';
import Card from './Card';

const CardGrid = ({ products }) => {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardGrid;
