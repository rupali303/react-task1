import { AppBar, Button, Toolbar,  useTheme } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function TaskCart() {

  const [index, setIndex] = useState(0)

  const theme = useTheme()
  
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