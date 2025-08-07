import React, { ReactNode } from 'react'

interface buttonType {
    type : "signin" | "logout"; 
    children:ReactNode;


}
const Button = ({type}:buttonType) => {
  return (
    <button className='w-20 border'>
        
      {type}
    </button>
  )
}

export default Button
