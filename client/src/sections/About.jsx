

import React from 'react'
import personalImage from '../assets/ali.webp'
import { motion } from 'framer-motion'
import { contactInfoData } from '../data'
import Section from '../components/Section'

const About = () => {
  return (
    <Section title={{ colored: "who am i?", main: "about me" }} id="about" >
      <div className='lg:flex justify-between overflow-x-hidden'>
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='basis-[45%] hidden lg:block'
         >
          <img src={personalImage} alt='/' className="rounded-[1.5rem]" />
        </motion.div>
        <motion.p
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-dark dark:text-light basis-[50%] leading-[2] text-[16px] sm:text-[18px]'
         >
            Welcome to my portfolio! I am a frontend developer with 2 years of experience,
            and a student of ITE at SVU. I am passionate about creating user-friendly and visually 
            appealing websites that deliver a great user experience. I am always looking to expand my 
            skill set and stay up-to-date with the latest web development trends and technologies.
            Please feel free to take a look at my projects and get in touch if you have any questions
            or opportunities for collaboration.
          <div className='mt-6'>
              {contactInfoData.map(userInfo => {
                const {id, content, icon, path } = userInfo
                return (
                  <p key={id} className='flex items-center'>
                    <span className='mr-2'>{icon}</span> {content.method}:<a href={path} className='ml-6 hover:text-white'>{content.info}</a>
                  </p>
                )
              })}
          </div>
        </motion.p>
      </div>
    </Section>
  )
}

export default About