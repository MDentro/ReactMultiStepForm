import React from 'react'
import './GoBackButton.css'

const GoBackButton = ({ handleClick }) => {
  return (
    <button
      type="button"
      className="go-back-button"
      onClick={() => handleClick()}>
      Go Back
    </button>
  )
}

export default GoBackButton
