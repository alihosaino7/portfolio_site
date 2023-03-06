

import React from 'react'
import { BsGithub, BsEye } from 'react-icons/bs'
// import { IoClose } from 'react-icons/io5'
// import Overlay from './Overlay'

const ProjectCard = ({ img, link }) => {

  return (
    <div className='relative group h-[220px]'>
      <div className='absolute w-full h-full left-0 top-0 bg-primary opacity-0 group-hover:opacity-[1] duration-300'>
         <div className='flex items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-3'>
            <span 
               className='cursor-pointer w-[40px] h-[40px] rounded-full bg-trans-white hover:bg-trans-white-hover text-light hover:text-white duration-300 text-xl grid place-items-center'>
               <a href={link} target='_black'>
                <BsGithub />
               </a>
            </span>
            {/* <span
               onClick={() => setFullSize(true)} 
               className='cursor-pointer w-[40px] h-[40px] rounded-full bg-trans-white hover:bg-trans-white-hover text-light hover:text-white duration-300 text-xl grid place-items-center'
            >
               <BsEye />
            </span> */}
         </div>
      </div>
      <img src={img} alt='/' className='w-full h-full' />
      {/* {fullSize && <FullImageSize img={fullImage} setFullSize={setFullSize} fullSize={fullSize} />} */}
    </div>
  )
}

// export const FullImageSize = ({ img, setFullSize, fullSize }) => {
//    return (
//       <Overlay isShown={fullSize}>
//          <div 
//             className='h-full w-full z-[5000] overflow-scroll' 
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
//          >
//             <span className='fixed right-10 top-[2%] text-light hover:text-white cursor-pointer text-4xl z-[3002] shadow-md backdrop:shadow-md' onClick={() => setFullSize(false)}>
//                <IoClose />
//             </span>
//             <div className='w-[90%]'>
//                <img src={img} alt="/" className='h-full' />
//             </div>
//          </div>
//       </Overlay>
//    )
// }

export default ProjectCard