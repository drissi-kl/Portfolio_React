import { useEffect, useState } from 'react'

import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'

function App() {

  const [showButtonToTop, setShowButtonToTop]=useState(false)
 
  const drissi=()=>{
    window.scrollTo({
      top:0, left:0, behavior:'smooth'
    })
  }

 


  useEffect(
    ()=>{
      const showUpButton=()=>{
        const buttontotop=document.querySelector('.buttonToTop');
        // console.log(window.scrollY)
        if(window.scrollY>350){
          setShowButtonToTop(true);
        } else {
          setShowButtonToTop(false);
        }
      }
      window.addEventListener('scroll', showUpButton);
    },[])


  return (
    <div className='container'>
      <Header />
      <Hero />
      <div className='divider'></div>
      <Main />
      <div className='divider'></div>
      <Contact />
      <div className='divider'></div>
      <Footer />

      {/* {showButtonToTop?<button className='buttonToTop bx bxs-chevron-up' onClick={()=>{drissi()}}></button>:null} */}
      {/* {showButtonToTop && <button className='buttonToTop bx bxs-chevron-up' onClick={()=>{drissi()}}></button>} */}
      <button className='buttonToTop bx bxs-chevron-up'
      // style={showButtonToTop?{opacity:'1'}:{opacity:0}}
      style={{opacity:showButtonToTop?1:0}}
      onClick={()=>{drissi()}}></button>

    </div>
  )
}

export default App

// 4:36
