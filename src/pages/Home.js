import '../App.css';
import Typed from 'typed.js';
import React from 'react';
import {Route,Link} from 'react-router-dom';
import Bar from '../Bar';
import { render } from '@testing-library/react';
import Experience from './Experience';


function Home() {
  const el = React.useRef(null);


  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Developer', 'Math Lover', "Student"],
      typeSpeed: 150,
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  
  React.useEffect(() =>{
    const gallery = document.getElementById("gallery");
            
  window.onmousemove = e => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  
  let  xDecimal = mouseX / window.innerWidth;
  let  yDecimal = mouseY / window.innerHeight;
  
  let  maxX = gallery.offsetWidth - window.innerWidth;
  let  maxY = gallery.offsetHeight - window.innerHeight;
  
  
  let  panX = maxX * xDecimal * -1;
  let  panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}});

  
    React.useEffect(() =>{  
      

      let intro = document.querySelector('.intro');
      let logo = document.querySelector('.logo-header');
      let logoSpan = document.querySelectorAll('.logo');

      
        setTimeout(()=>{
          logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
              span.classList.add('active');
            },(idx+1)*400)
          });
          setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
              setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
              },(idx+1)*50)
            
            })
          
          },2000);
          setTimeout(()=>{
            intro.style.top = '-100vh';
          },2300)
        })
      
       
      },[]);
      
  

  return (
   
    <div className="page"> 
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">Hello </span>
          
          <span className="logo">World</span>
        </h1>
      </div>
      
      <Bar></Bar>
      
      <div className="bodypart">
        
        <div className="title">
            <div className="prefix">
             I'm a &nbsp; 
            </div>
            <div className="animated-text">
                <span ref={el} >

                </span>
            </div>
            
        </div>
        
      </div>

      <div id="gallery">
          <div class="tile">
            
          </div>
          <div class="tile">
          </div>
          <div class="tile">
            
          </div>
          <div class="tile">
            
          </div>
          <div class="tile">
            
          </div>
          <div class="tile">
            
          <div class="tile">
            
          </div>
          <div class="tile">
            
          </div>
          <div class="tile">
            
          </div>
      </div>
      </div>
        
    </div>
    
    
    
  );
}

export default Home;