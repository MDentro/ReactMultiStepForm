import React, { useState, useEffect } from 'react'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import './Plan.css'
import prices from '../../helpers/prices'

const Plan = ({ planName, yearlyBilling, updateForm }) => {
  const [pricing, setPricing] = useState('')
  const [src, setSrc] = useState('')

  useEffect(() => {
    if (!yearlyBilling) {
      setPricing(`${prices[planName].monthly}/mo`)
    }
    if (yearlyBilling) {
      setPricing(`${prices[planName].yearly}/yr`)
    }
  }, [yearlyBilling])

  useEffect(() => {
    if (planName.toLowerCase() === 'arcade') {
      setSrc(arcade)
    }

    if (planName.toLowerCase() === 'advanced') {
      setSrc(advanced)
    }

    if (planName.toLowerCase() === 'pro') {
      setSrc(pro)
    }
  }, [planName])

  function activatePlan(e) {
    const plans = document.getElementsByClassName('plan-wrapper')
    for (let i = 0; i < plans.length; i++) {
      plans[i].classList.remove('active')
    }
    updateForm({ plan: planName })

    e.target.closest('button').classList.add('active')
  }

  return (
    <button
      type="button"
      onClick={(e) => activatePlan(e)}
      className="plan-wrapper"
      id={planName.toLowerCase()}>
      <section className="image-wrapper">
        <img src={src} alt="" />
      </section>
      <section className="plan-text-wrapper">
        <p className="plan-name">{planName}</p>
        <p className="pricing">{`${pricing}`}</p>
        <section className="discount-wrapper">
          {yearlyBilling && <p>2 months free</p>}
        </section>
      </section>
    </button>
  )
}

export default Plan
