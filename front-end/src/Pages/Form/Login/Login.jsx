import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Icon from './icon.png';


function Login() {
  const [email, setEmail] =useState() 
  const [password, setPassword] =useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {console.log(result)
      if(result.data === "Success")
      {
        localStorage.setItem('email', email);
        localStorage.setItem('loggedIn', true);
        navigate('/watch/1')
      }
    })
    .catch(err => console.log(err))
  }
  return(
    <div className="main">
    <div className="container">
      <div className="form-container login">
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-input">
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="email" placeholder="Enter email" autoComplete="off" name="email"  onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input type="password" placeholder="Enter password" autoComplete="off" name="password"  onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          </div>
          <button type="submit" >Login</button>
          <br />
          <Link to='/register'>Create an new account</Link>

        </form>
      </div>
      <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-right">
                    <img src={Icon} alt="" className='icon-pic'></img>
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details <br /> to enjoy your movie.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Login;