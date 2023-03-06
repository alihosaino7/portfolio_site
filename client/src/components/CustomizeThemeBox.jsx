

import React, { useEffect } from 'react'
import { colorsOptionsData } from '../data'
import Overlay from './Overlay'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../contexts/GlobalContext'
import { useThemeContext } from '../contexts/ThemeContext'
import { IoClose } from 'react-icons/io5'
import { MdSave } from 'react-icons/md'

const CustomizeThemeBox = () => {

  const { themeBoxOpened, setThemeBoxOpened } = useGlobalContext()
  const { theme, setTheme } = useThemeContext()
  const { primaryColor, darkMode } = theme

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor)  
  }, [theme])

  const themeBoxStyle = {
    transform: "translate(-50%, -50%)",
    display: themeBoxOpened ? 'block' : 'none',
    boxShadow: darkMode ? "2px 2px 15px 1px  rgba(255, 255, 255, .5)" : "2px 2px 15px 1px  rgba(0, 0, 0, .5)"
  }

  return (
    <Overlay isShown={themeBoxOpened}>
      <motion.div
          id='theme-box' 
          transition={{ duration: .5 }}
          initial={{ opacity: 0, top: 0 }}
          animate={{ opacity: themeBoxOpened ? 1 : 0, top: themeBoxOpened ? "50%" : 0 }}
          className='rounded-lg w-fit dark:bg-dark bg-light p-8 fixed left-[50%] top-[50%] z-[4000] text-center' 
          style={themeBoxStyle}
      >
        <button 
          onClick={() => setThemeBoxOpened(false)}
          className='dark:text-light dark:hover:text-white text-gray-400 hover:text-gray-500 absolute right-2 top-2 text-2xl'
        >
          <IoClose />
        </button>

        <div className='text-center w-fit mx-auto'>

          <h2 className='text-xl font-semibold dark:text-white text-black'>Customize Your Theme</h2>
          <p className='text-gray-400 text-sm'>Change the primary and background color to your preference</p>

          <div className='mt-8'>
            <h2 className='text-md font-medium mb-2 dark:text-white text-black'>Primary color</h2>
            <div className='flex gap-3 justify-center'>
            {colorsOptionsData.map(colorOption => {
                const { id, color, colorHover } = colorOption
                return (
                  <div
                    onClick={() => setTheme(prev => ({ ...prev, primaryColor: color }))}
                    key={id}
                    className={`w-[25px] h-[25px] rounded-full cursor-pointer`} 
                    style={{ backgroundColor: color }}
                  />
                )
            })}
            </div>
          </div>

          <div className='mt-8'>
            <h2 className='text-md font-medium mb-2 dark:text-white text-black'>Background color</h2>
            <div className='flex gap-3 justify-center'>
              <span
                className={`rounded-lg bg-white w-[50px] h-[30px] cursor-pointer border-2 border-solid hover:`}
                onClick={() => setTheme(prev => ({...prev, darkMode: false }))}
              />
              <span
                className={`rounded-lg bg-black w-[50px] h-[30px] cursor-pointer border-2 border-solid hover:`}
                onClick={() => setTheme(prev => ({...prev, darkMode: true }))}
              />
            </div>
          </div>

        </div>

      </motion.div>
    </Overlay>
  ) 
}

export default CustomizeThemeBox