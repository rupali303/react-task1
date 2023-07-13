import { Box, Button, Link, TextField } from '@mui/material'
import React, { useState } from 'react'
import HodResister from './HodResister'

function LoginPage() {
    const [data, setData] = useState("")
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

const handleSubmit=(e)=>{
e.preventDefault()
setData(...formData,data)
}
console.log(handleSubmit);
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }
    console.log(handleChange);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    borderRadius="25px"
                    border={"0.25px solid #ccc"}
                    padding={"60px"}
                    display={"flex"}
                    maxWidth={"450px"}
                    flexDirection={"column"}
                    margin={"100px auto"}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}
                >
                    <TextField label='username' type='text' placeholder='Enter username' name='username' value={formData.username} onChange={handleChange} variant='outlined' sx={{width:"100%"}} margin='normal' />
                    <TextField label='password' type='password' placeholder='Enter password' name='password' value={formData.password} onChange={handleChange} variant='outlined' margin='normal' />
                    <Button type='submit' sx={{ mt:2 , mb:2, textAlign:"center" }} variant='contained'>Login</Button>
                    <span>Not resistered Yet?
                        <Link href="LoginPage">Register</Link></span>
                </Box>
            </form>
        </>
    )
}

export default LoginPage











