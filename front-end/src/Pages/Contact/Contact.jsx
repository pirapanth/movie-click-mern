import React from "react";
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Contact.css';


function Contact() {
  const [name, setName] =useState()
  const [email, setEmail] =useState() 
  const [message, setMessage] =useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/contact',{name,email,message})
    .then(result => {console.log(result)
    localStorage.setItem('name', name);
    navigate('/thanks')
    })
    .catch(err => console.log(err))
  }
  return(
    <div className='main'>
    <div className="container">
      <div className="form-container signup">
        <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
          <div>
            <label htmlFor="email">
              <strong>Name(required)</strong>
            </label>
            <input type="text" placeholder="Enter Name" autoComplete="off" name="email" onChange={(e)=> setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">
              <strong>Email(required)</strong>
            </label>
            <input type="email" placeholder="Enter email" autoComplete="off" name="email"  onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">
              <strong>Message(required)</strong>
            </label>
            <textarea type="text"  autoComplete="off" name="message"  onChange={(e)=> setMessage(e.target.value)}/>
          </div>
          <button type="submit" >Submit</button>
          <br />
        </form>
      </div>
      <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-right">
                    <h1>Drop Your Message  <br /> Here</h1>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Contact;