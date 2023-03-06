

import React from 'react'
import { form as formStyles } from '../Styles'

const Form = ({ formRef }) => {
  return (
   <form ref={formRef}>
      <div className='flex flex-col xl:flex-row gap-2 mb-2'>
         <input type='text' placeholder='First Name' name='First Name' className={formStyles.input} />
         <input type='text' placeholder='Last Name' name='Last Name' className={formStyles.input} />
      </div>
      <div className='flex flex-col xl:flex-row gap-2 mb-2'>
         <input type='text' placeholder='Phone Number' name='Number' className={formStyles.input} />
         <input type='text' placeholder='Email' name='Email' className={formStyles.input} />
      </div>
      <textarea
         placeholder="Message"
         name='Message'
         className={formStyles.textarea}>
      </textarea>
      <button className={formStyles.sendBtn}>Send</button>
   </form>
  )
}

export default Form