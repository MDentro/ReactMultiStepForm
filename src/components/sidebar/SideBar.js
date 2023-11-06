import React, { useEffect } from 'react'
import './SideBar.css'

const SideBar = ({ activeFormStep }) => {
  useEffect(() => {
    const numbers = document.getElementsByClassName('step-number')

    for (let i = 0; i < numbers.length; i++) {
      numbers[i].classList.remove('active')
    }

    if (activeFormStep !== 5) {
      numbers[activeFormStep - 1].classList.add('active')
    } else {
      numbers[3].classList.add('active')
    }
  }, [activeFormStep])

  return (
    <div className="sidebar-container">
      <section className="sidebar-section">
        <p className="step-number active">1</p>
        <div className="wrapper-step-info">
          <p>STEP 1</p>
          <p>YOUR INFO</p>
        </div>
      </section>

      <section className="sidebar-section">
        <p className="step-number">2</p>
        <div className="wrapper-step-info">
          <p>STEP 2</p>
          <p>SELECT PLAN</p>
        </div>
      </section>

      <section className="sidebar-section">
        <p className="step-number">3</p>
        <div className="wrapper-step-info">
          <p>STEP 3</p>
          <p>ADD-ONS</p>
        </div>
      </section>

      <section className="sidebar-section">
        <p className="step-number">4</p>
        <div className="wrapper-step-info">
          <p>STEP 4</p>
          <p>SUMMARY</p>
        </div>
      </section>
    </div>
  )
}

export default SideBar
