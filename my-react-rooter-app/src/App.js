import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom' 
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  );
}

export default App;
