
// // import React, { useState } from 'react';
// // import { TextField, Button, Paper, Typography, Container, Card, CardContent, CardActions } from '@mui/material';
// // const MAX_FILE_SIZE = 100 * 1024;

// // const ProductCard = ({ product }) => {

 

// //   return (
// //     <Card>
// //       <CardContent>
// //         <Typography variant="h6" component="div">
// //           {product.productName}
// //         </Typography>
// //         <Typography color="textSecondary">
// //           Price: {product.productPrice}
// //         </Typography>
// //         {/* You can also display the uploaded image here */}
// //       </CardContent>
// //       <CardActions>
// //         <Button size="small">Edit</Button>
// //         <Button size="small">Delete</Button>
// //       </CardActions>
// //     </Card>
// //   );
// // };

// // const Product = () => {
// //   const [productName, setProductName] = useState('');
// //   const [productPrice, setProductPrice] = useState('');
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [products, setProducts] = useState([]);

// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [error, setError] = useState(null);


// //   const handleProductNameChange = (event) => {
// //     setProductName(event.target.value);
// //   };

// //   const handleProductPriceChange = (event) => {
// //     setProductPrice(event.target.value);
// //   };

// //   const handleImageUpload = (event) => {
// //     const file = event.target.files[0];
// //     if (file && file.size <= MAX_FILE_SIZE) {
// //       setSelectedFile(file);
// //       setError(null);
// //     } else {
// //       setSelectedFile(null);
// //       setError('File size exceeds the limit of 100KB');
// //     }

// //   };

// //   const handleAddProduct = () => {
// //     const newProduct = {
// //       productName,
// //       productPrice,
// //       selectedImage,
// //     };

// //     setProducts([...products, newProduct]);
// //     setProductName('');
// //     setProductPrice('');
// //     setSelectedImage(null);
// //   };

// //   return (
// //     <Container maxWidth="sm">
// //       <Paper elevation={3} style={{ padding: '20px',marginTop:"100px" }}>
// //         <Typography variant="h5" gutterBottom>
// //           Add Product
// //         </Typography>

// //         <input
// //           type="file"
// //           accept="image/*"
// //           onChange={handleImageUpload}
// //           style={{ marginTop: '10px' }}


// //           component="img"
// //           MAX_FILE_SIZE =" 100 * 1024"
// //           image="/static/images/cards"
// //           alt="Img"


         
// //         />
// //          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
// //           {error && <p style={{ color: 'red' }}>{error}</p>}

// //         <TextField
// //           label="Product Name"
// //           fullWidth
// //           value={productName}
// //           onChange={handleProductNameChange}
// //           margin="normal"
// //         />
// //         <TextField
// //           label="Product Price"
// //           fullWidth
// //           value={productPrice}
// //           onChange={handleProductPriceChange}
// //           margin="normal"
// //         />
       
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={handleAddProduct}
// //           style={{ marginTop: '20px' }}
// //         >
// //           Add Product
// //         </Button>
// //       </Paper>
      
// //       {/* Render product cards */}
// //       {products.map((product, index) => (
// //         <ProductCard key={index} product={product} />
// //       ))}
// //     </Container>
// //   );
// // };

// // export default Product;

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="100kb"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

import React from 'react'
import {data} from "./Data"
import Datalist from './Datalist'

function Product() {
  return (
    <>
      {data?.map((products)=>{
        return <Datalist products={products}/>
      })}
    </>
  )
}

export default Product