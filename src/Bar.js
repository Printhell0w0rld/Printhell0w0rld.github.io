import './App.css';
import Typed from 'typed.js';
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function Bar() {

    return (
        <div className="bar">
            <a href="./home">
                <div className="nav1">
                Thomas Fan
                </div>
            </a>
            
            <div className="nav-box">
                <a href="./home">
                    <div className="nav2">
                        <h1 className="nav3">
                        Main  
                        </h1>
                    </div>
                </a>
                
                <a href="./experience">
                <div className="nav2">
                        <h1 className="nav3">
                        Experience
                        </h1>
                    </div>
                </a>
                
                <a href="./interest">
                        <div className="nav2">
                        <h1 className="nav3">
                        Interest 
                        </h1>
                    </div>
                </a>
                
            </div>
        </div>
      
      
    );
  }
  
  export default Bar;