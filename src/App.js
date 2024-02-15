import './App.css';
import Typed from 'typed.js';
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Interest from "./pages/Interest"

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route exact path="/home" element={<Home />} /> 
      <Route exact path="/experience" element={<Experience />} /> 
      <Route exact path="/interest" element={<Interest />} /> 


    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;

