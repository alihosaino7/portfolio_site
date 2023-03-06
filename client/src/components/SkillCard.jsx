

import React, { useState, useEffect } from 'react'
import { useThemeContext } from '../contexts/ThemeContext'

const SkillCard = ({ icon, percentage, name, color, skillsScroll = false }) => {

   const { theme } = useThemeContext()

   const [iconColor, setIconColor] = useState(theme.darkMode ? "white" : 'black')
   const [percent, setPercent] = useState(0)

   useEffect(animateProgressBar, [skillsScroll])
   
   function animateProgressBar() {
      if (skillsScroll) setPercent(percentage)
   }

  return (
    <div className='w-full lg:flex'>
      <h2 className='flex text-black dark:text-white items-center lg:text-lg basis-[15%] mb-1 lg:mb-0'>
         <span 
            className={`mr-2 duration-300`} 
            style={{ color: iconColor }} 
            onMouseEnter={() => setIconColor(color)} 
            onMouseLeave={() => setIconColor(theme.darkMode ? "white" : 'black')}>
         {icon}
         </span>
         {name}
      </h2>
      <div className='relative flex-1 bg-trans-white w-full h-[30px]'>
         <span className='absolute bg-primary h-full duration-1000' style={{ width: `${percent}%`}}></span>
      </div>
    </div>
  )
}

export default SkillCard