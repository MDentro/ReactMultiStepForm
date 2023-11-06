import React from 'react'
import './Button.css'

const Button = ({ type, children, handleClick, className }) => {
  return (
    <button className={className} type={type} onClick={() => handleClick()}>
      {children}
    </button>
  )
}

export default Button
