import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useNavigate } from 'react-router-dom';

function TaskCart() {

  // const navigate = useNavigate()
  const [index, setIndex] = useState(0)

  const theme = useTheme()
  // console.log(theme);

  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  // console.log(isMobile);

  // const handleLogin = () => {
  //   navigate("/login")
  // }
const handleLogin=()=>{

}
  return (
    <>
      <AppBar sx={{ backgroundColor: "#dfd8d8" }}>
        <Toolbar>
          
          <>
            <Button sx={{ marginLeft: "auto",color:"white",backgroundColor:"red" }} onClick={handleLogin} > <ShoppingCartIcon sx={{ color: "white" }} />Buy Now</Button>
          </>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default TaskCart