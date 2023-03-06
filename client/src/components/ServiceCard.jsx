

import React from 'react'

const ServiceCard = ({ icon, title, desc, className }) => {
  return (
    <div className={`group p-[1.5rem] text-center rounded-md bg-trans-black dark:bg-trans-white text-dark hover:text-white dark:text-white h-[240px] duration-300 shadow-lg hover:shadow-trans-white relative z-[1] ${className}`}>
      <div className='absolute w-0 h-full top-0 left-0 bg-primary group-hover:w-full duration-300 z-[-1]'/>
      <div className='text-primary text-6xl w-fit mx-auto mb-3 group-hover:text-white duration-500'>{icon}</div>
      <h1 className='font-medium text-xl tracking-wide mb-3'>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default ServiceCard