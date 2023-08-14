import { Card } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Datalist({products}) {


    const [selectedImage, setSelectedImage] = useState(null);
    const [validationMessage, setValidationMessage] = useState('');
  
    const handleImageChange = (event) => {
      const imageFile = event.target.files[0];
  
      if (imageFile) {
        // Call the validation function
        const isValid = validateImageSize(imageFile);
  
        if (isValid) {
          setSelectedImage(imageFile);
          setValidationMessage('');
        } else {
          setSelectedImage(null);
          setValidationMessage('Image size exceeds the limit.');
        }
      }
    };
  
    const validateImageSize = (imageFile) => {
      const maxSize = 100 * 1024; // 100 KB in bytes
      return imageFile.size <= maxSize;
    };
  
    return (
        <>
        <h1>Image Size Validation</h1>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {validationMessage && <p>{validationMessage}</p>}
        {selectedImage && (
          <div>
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          </div>
        )}

    
{/* //   return (
    // <> */}
         <div style={{ display: "flex", flexWrap: "nowrap", gap: "20px" ,marginTop:"100px"}}>
            <Link to={`${products.id}`}>
                <Card sx={{ maxWidth: "300px"}}>
                    {products.thumbnail.size === 100 * 1024}{
                        <img src={products.thumbnail}  />
                    }
                    
                    <h5 sx={{ fontSize: "14px" }}>{products.title}</h5>
                    <h5 sx={{ fontSize: "14px" }}>Price: {products.price}</h5>
                </Card>
            </Link>
        </div>
        
    </>
  )
}

export default Datalist