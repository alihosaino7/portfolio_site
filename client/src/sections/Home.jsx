

import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import { motion } from 'framer-motion'
import person from '../assets/ali.webp'

const Home = () => {
  
  const [text, setText] = useState('Ali Hosaino')

  useEffect(() => {

    textLoad()
    setInterval(textLoad, 12000)

    function textLoad() {

      setTimeout(() => {
        setText("Ali Hosaino")
      }, 0)

      setTimeout(() => {
        setText("a Freelancer")
      }, 4000)

      setTimeout(() => {
        setText("a Web Developer")
      }, 8000)

    }

  }, [])

  return (
    <Section className="lg:pb-[100px] pt-[120px] lg:pt-[150px]" id="home">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: .5 }}
        className='text-center'
      >
        <div className='w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] mx-auto rounded-full overflow-hidden mb-4'>
          <img src={person} alt="/" className='object-cover w-full h-full' />
        </div>
        <h1 className='text-white font-bold text-[26px] sm:text-3xl leading-[1.6] wrapper-heading overflow-hidden'>
          <span className='text first-text text-black dark:text-white'>Hi, I'm </span>
          <span className='text-primary text sec-text'>
            {/* the animated caret above the text */}
            <span className='caret bg-main-bg-light dark:bg-main-bg-dark'/>
            {text}
          </span>
        </h1>
        <p className='text-gray-800 dark:text-gray-400'>Frontend Developer</p>
        <h2 className='text-dark dark:text-light mt-4 mb-5 text-[26px] sm:text-3xl font-medium tracking-wide'>
          Passionate to craft innovative web products.
        </h2>
        <button 
          type='button' 
          className={`
          border-solid border-[2px] rounded-lg py-2 px-4 duration-300
          text-white bg-black hover:text-black border-black hover:bg-transparent
          dark:text-black dark:bg-white dark:hover:text-white dark:border-white dark:hover:bg-transparent
          `}
        >
          <a href='#contact'>Connect with me</a>
        </button>
        {/* <button 
          onClick={handleDownload}
          type='button' 
          className={`
          border-solid border-[2px] rounded-lg py-2 px-4 duration-300
          text-white bg-black hover:text-black border-black hover:bg-transparent
          dark:text-white dark:bg-primary dark:hover:text-primary dark:border-primary dark:hover:bg-transparent
          `}
        >
          Downolad Resume
        </button>
           */}
      </motion.div>
    </Section>
  )
}

export default Home