import React, { useEffect, useState } from 'react';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import "./dash.css";

function Dashboard2() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);
    const [flag, setFlag] = useState(true);

    const handleInput = (e) => {
        const { id, value } = e.target
        if (id === "username") {
            setUsername(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    };
    const handleUsername = (e) => {
    };
    const handlePassword = (e) => {
    };
    const handleRegister = (e) => {
        const newUser = {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            department: "",
            userName: username,
            passWord: password
        };
        setUser([...user, newUser]);
        localStorage.setItem("user", JSON.stringify(user));
    };
    const handleRegistration = () => {
        setFlag(false);
    };
    return (
        flag === true ? (
            <div className='container'>
                <Typography variant="h4" align="center" gutterBottom>
                    Leave Management
                </Typography>
                <FormControl fullWidth sx={{ marginBottom: 2 }} margin='normal'>
                    <TextField onChange={handleUsername} margin='normal' label="Username" type="text" />
                    <TextField onChange={handlePassword} margin='normal' label="Password" type="password" />
                    <Button sx={{ marginTop: "15px" }} variant='contained'>
                        Login
                    </Button>
                    <div className='register'>
                        <span>Not Registered Yet ?</span>
                        <Button onClick={handleRegistration}>Register</Button>
                    </div>
                </FormControl>
            </div>
        ) :
            <div className='register-container'>
                <div className='radio'>
                    <label>
                        <input type="radio" name="options" id="HOD"></input> HOD
                    </label>
                    <label>
                        <input type="radio" name="options" id="Staff"></input> Staff
                    </label>
                </div>
                <div className="row">
                    <div className='formgroup'><label htmlFor='firstName'>First Name</label>
                        <input type="text" name="options" id="firstName"></input></div>
                    <div className='formgroup'><label htmlFor='lastName'>Last Name</label>
                        <input type="text" name="options" id="lastName"></input></div>
                </div>
                <div className="row">
                    <div className='formgroup'><label htmlFor='email'>Email</label>
                        <input type="email" name="options" id="email"></input></div>
                    <div className='formgroup'><label htmlFor='contact'>Contact</label>
                        <input type="tel" name="options" id="contact"></input></div>
                </div>
                <div className='row'>
                    <div className='formgroup select'>
                        <label>Department</label>
                        <select>
                            <option value="sales">Sales</option>
                            <option value="service">Service</option>
                            <option value="account">Account</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className='formgroup'><label htmlFor='username'>Username</label>
                        <input onChange={handleInput} value={username} type="text" name="options" id="username"></input></div>
                    <div className='formgroup'><label htmlFor='password'>Password</label>
                        <input onChange={handleInput} value={password} type="password" name="options" id="password"></input></div>
                </div>
                <FormControl sx={{ width: "96%", marginLeft: "2%" }} margin='normal'>
                    <Button variant='contained' onClick={handleRegister}>Register</Button>
                </FormControl>
                <div></div>
            </div>
    );
}
export default Dashboard2;