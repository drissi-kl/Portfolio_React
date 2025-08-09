import React from 'react'
import { useState, useEffect } from 'react'
import './header.css'

export default function Header() {
  const [popup, setpopup]=useState(false);
  const [light, setlight]=useState(false);

  const modeButton=()=>{
    console.log(light)
    if(light){
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')      
    }
    localStorage.setItem('mode', !light?"light":"dark" )
    setlight(!light);
    console.log(light)
    
  }
  
  useEffect(()=>{
    const mode=localStorage.getItem('mode')
    console.log(mode);
    if(mode == 'light'){
      setlight(true);
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }else{
      setlight(false);
      document.body.classList.remove('light')
      document.body.classList.add('dark') 
    }
  },[])

  return (
    <header className='flex'>
      <div className='menu'>
        <button className=' bx bx-menu-wider' onClick={()=>{setpopup(true)}}>
        {/* <i className=''  ></i>  */}
      </button>
      </div>
      

      <div></div>
      <nav>
        <ul className='flex'>
          <li><a href="About">About</a></li>
          <li><a href="Articles">Articles</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="Speaking">Speaking</a></li>
          <li><a href="Uses">Uses</a></li>
        </ul>
      </nav>

      <button className={light?"bx  bx-moon":"bx  bx-sun"} onClick={()=>modeButton()}>
   
        
      </button>

      {popup && <div className='popup'>
        <ul>
          <li>
            <button 
            className='closebutton bx bx-x'
            onClick={()=>{setpopup(false)}}
            // onMouseEnter={(e)=>{
            //   const btn=e.target;
            //   btn.style.cssText=`
            //     transform: rotate(360deg);
            //     scale:1.5
            //   `
            // }}  
            // onMouseLeave={(e)=>{
            //   const btn=e.target;
            //   btn.style.cssText=`
            //     transform: rotate(0deg);
            //     scale:1
            //   `
            // }}  
              >
                {/* <i className='bx  bx-x' ></i>  */}
              </button>
          </li>
          <li><a href="About">About</a></li>
          <li><a href="Articles">Articles</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="Speaking">Speaking</a></li>
          <li><a href="Uses">Uses</a></li>
        </ul>
      </div>}
    </header>
  )
}





