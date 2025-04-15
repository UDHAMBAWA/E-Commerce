import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import  About  from './pages/About.jsx';
import  Contact  from './pages/Contact';
import  Cart  from './pages/Cart';
import  Login  from './pages/Login';
import  Signup  from './pages/Signup';
import  Checkout  from './pages/Checkout';
import Navbar from './components/Navbar';  

const App = () => {
  return (
    <>
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    </>
  );
};

export default App;
