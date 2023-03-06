

import React, { useState } from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import { colorsOptionsData } from '../data'

const SettingsBox = () => {

   const [isOpened, setIsOpened] = useState(false)
   // const [currentColor, setCurrentColor] = useState()
   const settingsBoxWidth = "250px"

  return (
    <div 
      className={`duration-300 bg-white h-screen fixed z-[2000]`}
      style={{ width: settingsBoxWidth, left: isOpened ? "0px" : `-${settingsBoxWidth}`}}
    >
      <div className='p-2 px-3'>
         <SettingsBoxOption title="choose a color">
            <div className='flex flex-wrap gap-3 justify-center'>
               {colorsOptionsData.map(colorOption => {
                  const { id, color, colorHover } = colorOption
                  return <div key={id} 
                     style={{ boxShadow: "1px 1px 6px 0 hsla(0, 3%, 7%, .5)", backgroundColor: color }} 
                     className={`w-[25px] h-[25px] rounded-full cursor-pointer`} 
                  />
               })}
            </div>
         </SettingsBoxOption>
      </div>
      <span
      onClick={() => setIsOpened(state => !state)} 
      className='absolute right-[-28px] bottom-[50%] translate-y-[-50%] bg-white p-1 text-xl cursor-pointer'>
         <BsFillGearFill className={isOpened ? "animate-icon" : ""} />
      </span>
    </div>
  )
}

export const SettingsBoxOption = ({ children, title }) => {
   return (
      <div className='border px-2 py-3'>
         <h2 className='text-center mb-4 text-gray'>{title}</h2>
         {children}
      </div>
   )
}

export default SettingsBox