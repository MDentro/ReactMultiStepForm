import React, { useEffect, useState } from 'react'
import './FormSelectYourPlan.css'
import FormHeading from '../formHeading/FormHeading'
import Toggle from '../toggle/Toggle'
import Plan from '../plan/Plan'

const FormSelectYourPlan = ({ yearlyBilling, updateForm, plan }) => {
  const [activePlan, setActivePlan] = useState([])

  useEffect(() => {
    setActivePlan([plan.toLowerCase()])
  }, [plan])

  useEffect(() => {
    if (activePlan.length === 1) {
      document.getElementById(activePlan[0]).classList.add('active')
    }
  }, [activePlan])

  return (
    <div className="inner-form-container">
      <div className="inner-form-wrapper">
        <FormHeading
          title="Select your plan"
          subtext="  You have the option of monthly or yearly yearlyBilling."
        />

        <div className="plan-container">
          <Plan
            planName={'Arcade'}
            yearlyBilling={yearlyBilling}
            updateForm={updateForm}
          />

          <Plan
            planName={'Advanced'}
            yearlyBilling={yearlyBilling}
            updateForm={updateForm}
          />

          <Plan
            planName={'Pro'}
            yearlyBilling={yearlyBilling}
            updateForm={updateForm}
          />
        </div>
        <Toggle yearlyBilling={yearlyBilling} updateForm={updateForm} />
      </div>
    </div>
  )
}

export default FormSelectYourPlan
