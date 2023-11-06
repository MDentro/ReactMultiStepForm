import React from 'react'
import './Toggle.css'

const Toggle = ({ yearlyBilling, updateForm }) => {
  return (
    <div className="toggle-container">
      <p>Monthly</p>
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => updateForm({ yearlyBilling: e.target.checked })}
          checked={yearlyBilling}
          id="slider"
        />
        <span className="slider round"></span>
      </label>
      <p>Yearly</p>
    </div>
  )
}

export default Toggle
