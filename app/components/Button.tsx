import React from 'react'

interface buttonType {
    type : "signin" | "logout";

}
const Button = ({type}:buttonType) => {
  return (
    <button className='w-20 border'>
        
      {type}
    </button>
  )
}

export default Button
