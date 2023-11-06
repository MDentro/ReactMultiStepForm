import React from 'react'
import './FormAddOns.css'
import FormHeading from '../formHeading/FormHeading'
import AddOn from '../addOn/AddOn'

const FormAddOns = ({
  isLargerStorage,
  isCustomizableProfile,
  isOnlineService,
  updateForm,
  yearlyBilling,
}) => {
  return (
    <div className="inner-form-container">
      <div className="inner-form-wrapper">
        <FormHeading
          title="Pick add-ons"
          subtext="  Add-ons help enhance your gaming experience."
        />

        <AddOn
          checked={isOnlineService}
          label="Online service"
          text="Access to multiplayer games"
          updateForm={updateForm}
          checkBox="isOnlineService"
          yearlyBilling={yearlyBilling}
        />
        <AddOn
          checked={isLargerStorage}
          label="Larger storage"
          text="Extra 1TB of cloud save"
          updateForm={updateForm}
          checkBox="isLargerStorage"
          yearlyBilling={yearlyBilling}
        />

        <AddOn
          checked={isCustomizableProfile}
          label="Customizable Profile"
          text="Custom theme on your profile"
          updateForm={updateForm}
          checkBox="isCustomizableProfile"
          yearlyBilling={yearlyBilling}
        />
      </div>
    </div>
  )
}

export default FormAddOns
