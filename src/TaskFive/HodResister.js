import { Box, Button, Link, Radio, TextField } from '@mui/material'
import React, { useState } from 'react'

function HodResister() {

    const [selected, setSelected] = useState("")
    const [showInput1, setShowInput1] = useState(false);
    const [showInput2, setShowInput2] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        hod:"",
        staff:""
    })
    const handleChange = (e) => {
        setName((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setSelected(value);
        if (value === "phone") {
            setShowInput1(true);
            setShowInput2(false);
        } else if (value === "email") {
            setShowInput1(false);
            setShowInput2(true);
        }
    }
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
        setShowForm(e.target.value !== '')
    };

    const handleOptionChange = (e) => {
        console.log(e.target.value);

    }
    return (
        <>
            <form >
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
                    <div className='check'>
                        <label style={{ "fontWeight": "bold" }}>
                            HOD
                            <Radio type='radio' name='hod' value="hod" onChange={handleRadioChange} checked={selected === "hod"} />
                        </label>
                        <label style={{ "fontWeight": "bold" }}>
                            Staff
                            <Radio type='radio' name='staff' value="staff" onChange={handleRadioChange} checked={selected === "staff"} />
                        </label>
                    </div>

                    <div className='row'>
                        <div className='col-md-6' >
                            <label style={{ "fontWeight": "bold" }} htmlFor="firstname">First Name:</label>
                            <input required type="text" value={name.firstname} name='firstname' onChange={handleChange} />
                        </div>

                        <div className='col-md-6' >
                            <label style={{ "fontWeight": "bold" }} htmlFor="lastname">Last Name:</label>
                            <input required type="text" value={name.lastname} name='lastname' onChange={handleChange} />
                        </div>




                        <div className='col-md-6'>
                            <label style={{ "fontWeight": "bold" }} htmlFor="email">Email:</label>
                            <input required style={{ "margin": "15px 0", "padding": "0 18px" }} type="email" value={name.email} name='email' onChange={handleChange} />
                        </div>

                        <div className='col-md-6'>
                            <label style={{ "fontWeight": "bold" }} htmlFor="contact">Contact:</label>
                            <input required style={{ "margin": "15px 0", "padding": "0 10px" }} type="number" value={name.contact} name='contact' onChange={handleChange} />
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <label style={{ "fontWeight": "bold" }} htmlFor="dropdown">Department</label>
                            <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                                <option value="">Chose option</option>
                                <option onChange={handleOptionChange} value="option1">Science</option>
                                <option onChange={handleOptionChange} value="option2">Mathematics</option>
                                <option onChange={handleOptionChange} value="option3">Computer</option>
                                <option onChange={handleOptionChange} value="option4">Electronics</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                <div className='col-md-6' >
                    <label htmlFor="username">Username:</label>
                    <input required type="text" value={name.username} name='username' onChange={handleChange} />
                </div>
                <div className='col-md-6' >
                    <label htmlFor="password">Password:</label>
                    <input required type="password" value={name.password} name='password' onChange={handleChange} />
                </div>
            </div>
                    <Button type='submit' sx={{ mt: 2, mb: 2, textAlign: "center" }} variant='contained'>Login</Button>
                    <span style={{ "fontWeight": "bold" }}>Already resistered?<Link href="LoginPage">Login</Link></span>
                </Box>
            </form>
        </>
    )
}

export default HodResister