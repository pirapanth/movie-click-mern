import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact/Contact.jsx';
import Watch1 from './Pages/Watch/Watch1.jsx';
import Watch2 from './Pages/Watch/Watch2.jsx';
import Watch3 from './Pages/Watch/Watch3.jsx';
import Player from './Pages/Watch/Player/Player.jsx';
import Login from './Pages/Form/Login/Login.jsx';
import Signup from './Pages/Form/Register/Signup.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Thanks from './Pages/Thanks/Thanks.jsx';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/1" element={<Watch1 />} />
      <Route path="/watch/2" element={<Watch2 />} />
      <Route path="/watch/3" element={<Watch3 />} />
      <Route path="/watch/player" element={<Player />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;