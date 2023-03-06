
import React, { useEffect, useState } from 'react'
import { navLinksData as navLinks, socialIconsData as socialIcons } from '../data'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import Container from './Container'
import { motion } from 'framer-motion'
import logo from '../assets/logo-1.png'
// import { IoIosColorPalette } from 'react-icons/io'
import { useGlobalContext } from '../contexts/GlobalContext'
// import { navbar } from '../Styles'

const Navbar = () => {

  const { setThemeBoxOpened } = useGlobalContext()

  const [isScrolled, setIsScrolled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(prevState => !prevState)
  }

  function showColorThemeBox() {
    setThemeBoxOpened(true)
  }

  useEffect(() => {

    addEventListener('scroll', handleScroll)

    function handleScroll() {

      if (scrollY >= 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
       
    }

  }, [])

  return (
    <motion.nav
      initial={{ y: -25 }} 
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 py-3 z-[1000] ${isScrolled ? 'bg-trans-black dark:bg-trans-white' : ''}`} 
      style={{ backdropFilter: `blur(${isScrolled != "transparent" ? 20 : 0}px)` }}
    >
      <Container>
        <div className='flex items-center justify-between h-full'>
          <div className='h-[35px] sm:h-[50px]'>
            <img src={logo} alt="/" className='h-full object-cover' />
            {/* <h1 className='bg-white py-1 px-3 rounded-2xl hover:text-white hover:bg-transparent border border-solid duration-150 cursor-pointer border-white flex items-center justify-center'>WBK</h1> */}
          </div>
          <ul className='hidden md:flex items-center gap-[2rem]'>
            {navLinks.map(link => (
              <li 
                key={link.id} 
                className='text-dark hover:text-black dark:text-light cursor-pointer dark:hover:text-white capitalize'
              >
                <a href={`#${link.content}`}>{link.content}</a>
              </li>
            ))}
          </ul>
          <ul className='hidden md:flex items-center gap-5'>
            {/* <span 
              className={navbar.changeColorBtn}
              onClick={showColorThemeBox}
            >
               <IoIosColorPalette />
            </span> */}
            {socialIcons.map(item => {
              const { id, icon, path } = item
              return (
                <li key={id}>
                  <a 
                    href={path} 
                    target='_blank' 
                    className='text-dark hover:text-black dark:text-light dark:hover:text-white text-xl  duration-150 cursor-pointer'
                  >
                    {icon}
                  </a>
                </li>
              )
            })}
          </ul>
          <FixedMenu showMenu={showMenu} toggleMenu={toggleMenu} />
          <button 
            className='text-white text-2xl md:hidden'
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>
      </Container>
    </motion.nav>
  )
}

export const FixedMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div className={`fixed bg-black w-full h-screen z-[1000] p-3 top-0 duration-300`} style={{ left: showMenu ? "0%" : "-100%" }}>
      <button 
        className='text-gray-400 hover:text-white text-4xl w-fit flex ml-auto'
        onClick={toggleMenu}
      >
        <IoClose />
      </button>
      <ul className='mt-10'>
        {navLinks.map(link => (
          <li
            onClick={toggleMenu} 
            key={link.id} 
            className='text-light text-xl cursor-pointer w-fit mb-6 mx-auto hover:text-white capitalize'
          >
            <a href={`#${link.content}`}>{link.content}</a>    
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar