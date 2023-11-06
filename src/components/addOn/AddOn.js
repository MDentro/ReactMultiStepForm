import React, { useState, useEffect } from 'react'
import './AddOn.css'

import prices from '../../helpers/prices'

const AddOn = ({
  checked,
  label,
  text,
  yearlyBilling,
  updateForm,
  checkBox,
}) => {
  const [rate, setRate] = useState('')

  useEffect(() => {
    const addOn = checkBox.split('is')[1]
    const formattedAddOn = addOn.charAt(0).toLowerCase() + addOn.slice(1)

    if (!yearlyBilling) {
      setRate(`+$${prices[formattedAddOn].monthly}/mo`)
    }
    if (yearlyBilling) {
      setRate(`+$${prices[formattedAddOn].yearly}/yr`)
    }
  }, [yearlyBilling])

  useEffect(() => {
    if (checked) {
      document.getElementById(checkBox).classList.add('activated')
    }
  }, [checkBox])

  function activateCheckBox(e) {
    const checkBoxDom = document.getElementById(`checkbox-${checkBox}`)

    if (!checkBoxDom.checked) {
      e.target.closest('.add-on-wrapper').classList.add('activated')
      checkBoxDom.checked = true
    } else {
      checkBoxDom.checked = false
      e.target.closest('.add-on-wrapper').classList.remove('activated')
    }
    updateForm({ [checkBox]: checkBoxDom.checked })
  }

  return (
    <button
      type="button"
      className="add-on-wrapper"
      id={checkBox}
      onClick={(e) => activateCheckBox(e)}>
      <div className="checkbox-wrapper">
        <input
          name={label}
          type={'checkbox'}
          checked={checked}
          className="checkbox"
          id={`checkbox-${checkBox}`}
          onChange={(e) => activateCheckBox(e)}
        />
      </div>
      <div className="checkbox-text-wrapper">
        <label htmlFor={label} className="checkbox-label">
          {label}
        </label>
        <p>{text}</p>
      </div>
      <div className="rate-wrapper">
        <p className="rate">{rate}</p>
      </div>
    </button>
  )
}

export default AddOn
