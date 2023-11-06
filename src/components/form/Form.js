import React, { useState } from 'react'
import SideBar from '../sidebar/SideBar'
import './Form.css'
import Button from '../button/Button'
import FormPersonalInfo from '../formPersonalInfo/FormPersonalInfo'
import FormSelectYourPlan from '../formSelectYourPlan/FormSelectYourPlan'
import GoBackButton from '../goBackButton/GoBackButton'
import FormAddOns from '../formAddOns/FormAddOns'
import FormSummary from '../formSummary/FormSummary'
import FormThankYou from '../formThankYou/FormThankYou'
import checkError from '../../helpers/checkError'
import initialFormValues from '../../helpers/initialFormValues'

const Form = () => {
  const [formData, setFormData] = useState(initialFormValues)
  const [activeFormStep, setActiveFormStep] = useState(1)
  const [error, toggleError] = useState(false)

  function handleSubmit() {
    console.log(formData)
    setActiveFormStep(5)
  }

  function goNext() {
    if (activeFormStep >= 1) {
      setActiveFormStep(activeFormStep + 1)
    }
  }

  function goBack() {
    if (activeFormStep > 1) {
      setActiveFormStep(activeFormStep - 1)
    }
  }

  function updateForm(fieldToUpdate) {
    setFormData({ ...formData, ...fieldToUpdate })
  }

  function checkingError() {
    toggleError(false)
    const possibleErrorFields = ['name', 'email', 'phone']

    let results = []
    possibleErrorFields.map((field) => {
      const result = checkError(formData[field], field)
      results.push(result)
    })

    if (results[0] && results[1] && results[2]) {
      toggleError(true)
    }

    if (!results[0] && !results[1] && !results[2]) {
      setActiveFormStep(activeFormStep + 1)
    }
  }

  return (
    <form className="form-container">
      <SideBar activeFormStep={activeFormStep} />

      <div className="form-wrapper">
        <div className="form-inner-wrapper">
          {activeFormStep === 1 && (
            <FormPersonalInfo
              {...formData}
              updateForm={updateForm}
              error={error}
            />
          )}

          {activeFormStep === 2 && (
            <FormSelectYourPlan {...formData} updateForm={updateForm} />
          )}

          {activeFormStep === 3 && (
            <FormAddOns {...formData} updateForm={updateForm} />
          )}

          {activeFormStep === 4 && (
            <FormSummary {...formData} setActiveFormStep={setActiveFormStep} />
          )}

          {activeFormStep === 5 && <FormThankYou />}

          <section className="button-container-desktop">
            {activeFormStep === 1 && (
              <Button
                className="button confirm-button"
                type="button"
                handleClick={checkingError}>
                Next Step
              </Button>
            )}
            {activeFormStep > 1 && activeFormStep < 4 && (
              <Button className="button" handleClick={goNext} type="button">
                Next Step
              </Button>
            )}

            {activeFormStep === 4 && (
              <Button
                className=" button confirm-button"
                type="submit"
                handleClick={handleSubmit}>
                Confirm
              </Button>
            )}
            {activeFormStep > 1 && activeFormStep < 5 && (
              <GoBackButton handleClick={goBack} />
            )}
          </section>
        </div>
        <section className="button-container-mobile">
          {activeFormStep > 1 && activeFormStep < 4 && (
            <Button className="button" handleClick={goNext} type="button">
              Next Step
            </Button>
          )}

          {activeFormStep === 1 && (
            <Button
              className="button confirm-button"
              type="button"
              handleClick={checkingError}>
              Next Step
            </Button>
          )}
          {activeFormStep === 4 && (
            <Button
              className="button confirm-button"
              type="button"
              handleClick={handleSubmit}>
              Confirm
            </Button>
          )}
          {activeFormStep > 1 && activeFormStep < 5 && (
            <GoBackButton handleClick={goBack} />
          )}
        </section>
      </div>
    </form>
  )
}

export default Form
