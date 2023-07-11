import React, { useState } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import CardGrid from './CardGrid';
import Table from './Table';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const openFormDialog = () => {
    // Handle dialog open logic
  };

  const addProduct = (product) => {
    const newProduct = {
      id: Date.now(),
      ...product,
      quantity: 1,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <Navbar openFormDialog={openFormDialog} />
      <Form addProduct={addProduct} />
      <CardGrid products={products} />
      <Table products={products} />
    </div>
  );
};

export default Dashboard;
