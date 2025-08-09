import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animation/done.json'
import emailAnimation from '../../../public/animation/mail.json'

import './contact.css'

export default function Contact() {
  const [state, handleSubmit] = useForm("xeozlryl");

  return (
    <div className='contact-us'>
      <h1 className='title' >
        <span className='bx bx-envelope'></span>
        Contact us
      </h1>
      <p className='subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione nulla, architecto repellendus voluptatum blanditiis iure eligendi similique dolore eum impedit placeat doloribus, veniam ipsam autem dolorum in facere! Sed, quae.</p>

      <div  className='form_animation'>
        <form onSubmit={handleSubmit}>

          <div className='email'>
            <label htmlFor="email">email address</label>
            <input autoComplete='off' type="email" name="email" id="email" placeholder='your email'  />
          </div>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          <div className='message'>
            <label htmlFor="message">your massage</label>
            <textarea name="message" id="message" placeholder='your massage'></textarea>
          </div>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting} className='submit'>
            {state.submitting?'submitting ...':'submit'}
          </button>
          {
            state.succeeded?<p style={{color:"var(--title)", display:'flex', alignItems:'center', gap:'6px'}}>
              <Lottie animationData={doneAnimation} loop={false} />
              the message has been sent successfully
            </p>:''
          } 
        </form>
 
        <div className="animation">
          <Lottie animationData={emailAnimation} loop={true} style={{height:'300px'}} />
        </div>
      </div>
    </div>
  )
}
