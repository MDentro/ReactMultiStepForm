import React from 'react'
import './FormHeading.css'

const FormHeading = ({ title, subtext }) => {
  return (
    <div>
      <p className="form-title">{title}</p>
      <p className="form-subtext">{subtext}</p>
    </div>
  )
}

export default FormHeading
