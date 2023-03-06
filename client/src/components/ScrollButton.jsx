

import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const ScrollButton = () => {

  const [showButton, setShowButton] = useState(false)

  function scrollToTop() {
    scrollTo({
      top: "0",
      behavior: "smooth"
    })
  }

  useEffect(() => {
    addEventListener("scroll", () => {
      if (scrollY > 800) 
        setShowButton(true)
       else 
        setShowButton(false)
    })
  }, [])

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed rounded-full w-[50px] h-[50px] right-10 bottom-10 text-2xl text-white bg-primary hover:bg-primary-hover
                  duration-150 z-[1000] justify-center items-center ${showButton ? "flex" : "hidden"}`}
    >
      <IoIosArrowUp />
    </button>
  )
}

export default ScrollButton