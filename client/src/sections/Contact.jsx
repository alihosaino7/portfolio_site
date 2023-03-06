

import React, { useEffect, useRef, useState } from 'react'
import Section from '../components/Section'
import { contactInfoData, socialIconsData } from '../data'
import { motion } from 'framer-motion'
import { form as formStyle } from '../Styles'

const CustomInput = ({ name, placeholder, callback }) => {
  return <input type='text' placeholder={placeholder} name={name} className={formStyle.input} onChange={callback} />
}

const Contact = () => {

  const [body, setBody] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    message: ''
  })
  
  function setBodyCb(e) {
    setBody(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  
  function sendEmail(e) {
    e.preventDefault()
    const { email, number, message, firstName, lastName } = body
    if (email && number && message && firstName && lastName) {
      const url = 'http://localhost:5000/send_email'
      const request = new Request(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      fetch(request)
    }
  }

  return (
    <Section title={{ colored: "get in touch", main: "contact me" }} id="contact">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='bg-white rounded-lg p-8'
      >
        <div className='flex flex-col xl:flex-row gap-y-8 gap-x-4 overflow-hidden'>
          {/* Column One */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className='text-2xl font-bold mb-5'>Just Say Hi!</h2>
            <div className='mb-5'>
              <p className='mb-3'>
                Thank you for visiting my portfolio! If you would like to get in touch,
                please don't hesitate to reach out. Whether you have a question, suggestion,
                or just want to say hello, I'd love to hear from you.
                You can contact me via email or fill out the form with your message.
                I'll do my best to respond as soon as possible.
                Thank you again for stopping by, and i look forward to hearing
                from you soon!
              </p>
            </div>
            {contactInfoData.map(userInfo => {
              const { id, icon, content, path } = userInfo
              return (
                <a href={path} target="_blank" key={id}>
                  <div className='flex items-center mb-4' key={id}>
                      <span className={formStyle.contactIcon}>
                        {icon}
                      </span>
                      <h2>{content.info}</h2>
                  </div>
                </a>
              )
            })}
            <ul className='flex items-center gap-3 mt-8'>
              {socialIconsData.map(item => {
                const { id, path, icon } = item
                return <li key={id} className='text-xl cursor-pointer'><a href={path}>{icon}</a></li>
              })}
            </ul>
          </motion.div>
          {/* Column One */}
          {/* Column Two */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className='text-2xl font-bold mb-5'>Get In Touch</h2>
            <form>
              <div className='flex flex-col xl:flex-row gap-2 mb-2'>
                <CustomInput name='firstName' placeholder='First Name' callback={setBodyCb} />
                <CustomInput name='lastName' placeholder='Last Name' callback={setBodyCb} />
              </div>
              <div className='flex flex-col xl:flex-row gap-2 mb-2'>
                <CustomInput name='number' placeholder='Phone Number' callback={setBodyCb} />
                <CustomInput name='email' placeholder='Email' callback={setBodyCb} />
              </div>
              <textarea
                placeholder="Message"
                name='message'
                onChange={setBodyCb}
                className={formStyle.textarea}>
              </textarea>
              <button type='submit' className={formStyle.sendBtn} onClick={sendEmail}>Send</button>
            </form>
          </motion.div>
          {/* Column Two */}
        </div>
      </motion.div>
    </Section>
  )
}

export default Contact