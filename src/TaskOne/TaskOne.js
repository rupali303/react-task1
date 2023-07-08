import React, { useState } from 'react';
import "./Form.css"

const TaskOne = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: ""
  })

  const handleChange = (e) => {
    setName((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
    setShowForm(e.target.value !=='')
  };

  const handleOptionChange = (e) => {
    console.log(e.target.value);
    
  }

  return (
    <form className="form">
      <div className='row'>
        <div className='col-md-6'>
          <label style={{fontWeight:"bold"}} htmlFor="firstname">First Name:</label>
          <input type="text"  name='firstname' onChange={handleChange} />
        </div>

        <div className=" col-md-6">
          <label style={{fontWeight:"bold"}} htmlFor="lastname">Last Name:</label>
          <input type="text"  name='lastname' onChange={handleChange} />
        </div>
      </div>

      <div className='row'>
       
      <div className="form-group col-6">
        <label style={{fontWeight:"bold"}} htmlFor="dropdown">How should we contact you?</label>
        <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
          <option style={{fontWeight:"bold"}}>Chose option</option>
          <option onChange={handleOptionChange} value="option1">phone</option>
          <option onChange={handleOptionChange} value="option2">Email</option>
        </select>
      </div>
      </div>
 <div>
{showForm && (<div className="form-group col-md-6">
        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" name='phone'  />
      </div> ) 
    
      }
      

      </div>
       
    </form>

  );
};

export default TaskOne;
