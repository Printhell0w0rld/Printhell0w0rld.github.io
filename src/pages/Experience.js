import '../App.css';
import './experience.css';
import Typed from 'typed.js';
import React from 'react';
import {Route,Link} from 'react-router-dom';
import Bar from '../Bar';


function Experience() {
 

  return (
   
    <div>
      <Bar>
      </Bar>
        
      <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">June - Sep, 2023</h3>
                  <h1>Front End Developer</h1>
                  <h3>HTML CSS Javascript</h3>
                  <p>To be added To be added To be added To be added To be added To be added To be added To be added </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">Sep, 2022 - Current</h3>
                  <h1>University of Waterloo</h1>
                  <p>Undergraduate student</p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">20th may, 2010</h3>
                  <h1>Heading 3</h1>
                  <p>To be added To be added To be added To be added To be added To be added To be added To be added </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">20th may, 2010</h3>
                  <h1>Heading 4</h1>
                  <p>To be added To be added To be added To be added To be added To be added To be added To be added </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
    </div>
    
    
  );
}

export default Experience;
