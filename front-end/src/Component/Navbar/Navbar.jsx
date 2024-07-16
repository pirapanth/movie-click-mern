import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import Click from './logo.png';

const Navbar = () => {
    const location = useLocation();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const userEmail = localStorage.getItem('email');

        if (userEmail && location.pathname !== '/login' && location.pathname !== '/signup') {
            axios.get(`http://localhost:3001/user/${userEmail}`)
                .then(response => {
                    setUserName(response.data.name);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        } else {
            setUserName('');
        }
    }, [location.pathname]);

    return (
        <div className='nav'>
            <div className="nav-logo">
                <img src={Click} alt="" className='nav-pic' />
                Movie-Click
            </div>
            <nav className="navbar">
                <ul className="nav-menu">
                        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li><NavLink to="/watch/1" className="nav-link">Watch</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    {location.pathname === "/"? (
                      <React.Fragment>
                        <li className='nav-login'><NavLink to="/login" className="nav-link">Login</NavLink></li>
                      </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {userName &&<p className='user-login'>{userName}</p>}
                            <li className='nav-login'><NavLink to="/" className="nav-link">Logout</NavLink></li>
                        </React.Fragment>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;