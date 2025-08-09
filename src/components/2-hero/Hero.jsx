import React, { useRef, useEffect } from 'react'
import { motion } from "motion/react"

import Lottie from "lottie-react";

import developerAnimation from '../../../public/animation/Coding.json'
import './hero.css';

export default function Hero() {
  const lottieRef=useRef()
  useEffect(()=>{
    if(lottieRef.current){
      lottieRef.current.setSpeed(1.5)
    }
  },[])

  return (
    <section className='hero'>
      <div className='left-section'>
        <div className="parent-avatar">
          <motion.img
          initial={{transform:"scale(0.7)", opacity:0}}
          animate={{transform:"scale(1)", opacity:1}}
          transition={{duration:0.5}}
          src="/myself.png" alt="" className='avatar' />
          <div className='bx  bx-user-check'> </div>
        </div>

        <motion.h1
        initial={{transform:"scale(0.7)"}}
        animate={{transform:"scale(1)"}}
        transition={{duration:0.4}}
        className="title">Full-stack developer, software designer and Software testing</motion.h1>

        <p className="subtitle">Drissi Abderrahmane is a versatile full-stack developer with strong skills in software design and testing. He builds reliable applications, crafts efficient system architectures, and ensures code quality through rigorous testing.</p>

        <div className="icons">
          <div className="icon bx bxl-twitter"></div>
          <div className="icon bx bxl-instagram"></div>
          <div className="icon bx bxl-github"></div>
          <div className="icon bx bxl-linkedin-square"></div>
        </div>
      </div>


      <div className='right-section animation'>
        <Lottie lottieRef={lottieRef} className='developeranimation' animationData={developerAnimation} loop={true}  />
      </div>
      
    </section>
  )
}
