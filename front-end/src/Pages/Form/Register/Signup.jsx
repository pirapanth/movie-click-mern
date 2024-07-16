import {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Icon from './icon.png';

function Signup(){
  const [name, setName] =useState()
  const [email, setEmail] =useState() 
  const [password, setPassword] =useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
    localStorage.setItem('name', name);
    navigate('/login')
    })
    .catch(err => console.log(err))
  }
  return(
    <div className='main'>
    <div className="container">
      <div className="form-container signup">
        <form onSubmit={handleSubmit}>
        <h2>Register</h2>
          <div>
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input type="text" placeholder="Enter Name" autoComplete="off" name="email" onChange={(e)=> setName(e.target.value)} />
          </div>
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
          <button type="submit" >Register</button>
          <br />
          <Link to='/login'>Already Have an Account</Link>
        </form>
      </div>
      <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-right">
                    <img src={Icon} alt="" className='icon-pic'></img>
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details <br /> to enjoy your movie.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Signup;