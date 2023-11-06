import React from 'react'
import './InputField.css'

const InputField = ({
  name,
  value,
  label,
  type,
  placeHolder,
  handleChange,
  errorMessage,
}) => {
  return (
    <div className="inputfield-container">
      <section className="label-error-wrapper">
        <label htmlFor={name} className="input-label">
          {label}
        </label>
        <p id={`${name}-error`} className="error">
          {errorMessage}
        </p>
      </section>
      <input
        id={`${name}-inputfield`}
        name={name}
        value={value}
        type={type}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  )
}

export default InputField
