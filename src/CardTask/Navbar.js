import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Navbar = ({ openFormDialog }) => {
  const handleButtonClick = () => {
    openFormDialog();
  };

  return (
    <nav>
      <Button onClick={handleButtonClick}>Buy Now</Button>
    </nav>
  );
};

export default Navbar;
