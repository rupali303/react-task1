import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("Product")

    }

    return (
        <>
            <AppBar sx={{ backgroundColor: "lightcyan" }}>
                <Toolbar>

                    <Button
                        sx={{ marginLeft: "auto", backgroundColor: "red" }} onClick={handleLogin} variant='contained'>
                        <ShoppingCartIcon sx={{ color: "white" }} />
                        Buy Now</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar