

import React, { useEffect } from 'react'

const Overlay = ({ children, isShown }) => {

   useEffect(() => {

    if (isShown) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

   }, [isShown])

   return (
      <div 
        style={{ backdropFilter: "blur(10px)", display: isShown ? 'flex' : 'none' }}
        className='w-full h-full items-center justify-center bg-trans-white fixed left-0 top-0 z-[4000]'
      >
        {children}
      </div>
    )
}

export default Overlay