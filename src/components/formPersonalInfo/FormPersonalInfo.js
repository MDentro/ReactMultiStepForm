import React from 'react'
import './FormPersonalInfo.css'
import InputField from '../inputField/InputField'
import FormHeading from '../formHeading/FormHeading'
import checkError from '../../helpers/checkError'

const FormPersonalInfo = ({ name, email, phone, updateForm, error }) => {
  function changeHandler(e, field) {
    updateForm({ [field]: e.target.value.trim() })

    checkError(e.target.value.trim(), field)
  }

  return (
    <div className="inner-form-container">
      <div className="inner-form-wrapper">
        <FormHeading
          title="Personal info"
          subtext="Please provide your name, email address, and phone number."
        />

        <InputField
          type={'text'}
          name={'name'}
          value={name}
          label={'Name'}
          placeHolder={'e.g. Stephen King'}
          handleChange={(e) => changeHandler(e, 'name')}
          errorMessage={'This field is required'}
        />

        <InputField
          type={'email'}
          name={'email'}
          value={email}
          label={'Email address'}
          placeHolder={'e.g. stephenking@lorem.com'}
          handleChange={(e) => changeHandler(e, 'email')}
          errorMessage={'The email address is not formatted correctly'}
        />

        <InputField
          type={'text'}
          name={'phone'}
          label={'Phone Number'}
          value={phone}
          placeHolder={'e.g. +1 234 567 890'}
          handleChange={(e) => changeHandler(e, 'phone')}
          errorMessage={'This field may only contain numbers'}
        />

        {error && (
          <div className="error-wrapper">
            <p className="errorMessage">
              A step is submitted, but no selection has been made
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FormPersonalInfo
