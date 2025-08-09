import React, { useEffect , useState} from 'react'
import { AnimatePresence, motion } from "motion/react"
import { all } from 'axios';

import './main.css'
// import articleImage from '/article.jpeg'
import {allProjects} from '../../databases/projects.json'





export default function Menu() {
  const buttonLabel=['all projects', 'HTML & CSS', 'javaScript', 'reacte & MUI', 'node & express'];
  const [active , setactive]=useState(0)
  const [projects, setproject]=useState(allProjects);

  const selectProjects=(ctg)=>{
    console.log(ctg)
    let drissi=allProjects.filter((ele)=>{return ele.category.toLowerCase() == ctg.toLowerCase() })
    if(drissi.length == 0){
      drissi=allProjects;
    }
    setproject(drissi)
  }

  return (
    <main >
      <section className='left-section'>
        {
          buttonLabel.map((item, index)=>{return (
            <button key={index}
            className={index==active?'active':''}
            onClick={()=>{
              setactive(index);
              selectProjects(item);
            }}
            >{item}</button>
          )})
        }

        {/* <button className='active' >all projects</button>
        <button>HTML & CSS</button>
        <button>javaScript</button>
        <button>reacte & MUI</button>
        <button>node & express</button> */}
      </section>

      <section className='right-section'>
      <AnimatePresence>
      {projects.map((item, index)=> {return(
          <motion.article
          initial={{transform:"scale(0.2)"}} 
          animate={{transform:"scale(1)"}} 
          transition={{type:'spring', damping:30}}
          layout
          className='card' key={index} >
            <img src={item.image} alt="" />
            <div className="box">
              <h1 className='title'>{item.title}</h1>
              <p className='subtitle'>{item.description}</p>
              <div className='icons'>
                <div className="left-icons">
                  <a href=""><div className='bx bx-link'></div></a>
                  <a href=""><div className='bx bxl-github'></div></a>
                </div>
                
                <a href="" className="right-icons">
                  <span style={{fontSize:'16px'}}>more</span> 
                  <div  className='bx bx-right-arrow-alt'></div></a>
              </div>
            </div>
          </motion.article>
        )})
        
      }
      </AnimatePresence>

        
      </section>
    </main>
  )
}
