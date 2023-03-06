

import React from 'react'

const Title = ({ colored, main, className = "" }) => (
   <div className={`text-center mb-[50px] lg:mb-[60px] ${className}`} >
      <span className='text-primary uppercase text-sm lg:text-lg tracking-wider font-medium relative'>
        {colored}
        <span className='h-[2px] bg-primary w-[10%] top-[50%] translate-y-[-50%] absolute left-[-20%]' />
        <span className='h-[2px] bg-primary w-[10%] top-[50%] translate-y-[-50%] absolute right-[-20%]' />
      </span>
      <h1 className='text-black dark:text-white font-semibold text-3xl lg:text-4xl xl:text-5xl capitalize mt-3'>{main}</h1>
   </div>
)

const Section = ({ children, className, title, rfrnc, id }) => {
  return (
    <section className={`py-[50px] lg:py-[80px] ${className}`} ref={rfrnc} id={id} >
      {title && <Title colored={title?.colored} main={title?.main} />}
      {children}
    </section>
  )
}

export default Section