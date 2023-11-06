import React, { useState, useEffect } from 'react'
import './FormSummary.css'
import FormHeading from '../formHeading/FormHeading'
import prices from '../../helpers/prices'
import calculateTotal from '../../helpers/calculateTotal'

const FormSummary = ({
  yearlyBilling,
  plan,
  setActiveFormStep,
  isLargerStorage,
  isCustomizableProfile,
  isOnlineService,
}) => {
  const [displayDivider, toggleDisplayDivider] = useState(false)

  useEffect(() => {
    if (isLargerStorage || isCustomizableProfile || isOnlineService) {
      toggleDisplayDivider(true)
    }
  }, [])

  function priceAddOn(checkBox) {
    const addOn = checkBox.split('is')[1]
    const formattedAddOn = addOn.charAt(0).toLowerCase() + addOn.slice(1)

    if (yearlyBilling) {
      return (
        <p className="summary-price">
          {`+$${prices[formattedAddOn].yearly}/yr`}
        </p>
      )
    } else {
      return (
        <p className="summary-price">
          {`+$${prices[formattedAddOn].monthly}/mo`}
        </p>
      )
    }
  }

  return (
    <div className="inner-form-container">
      <div className="inner-form-wrapper">
        <FormHeading
          title="Finishing up"
          subtext="Double-check everything looks OK before confirming."
        />

        <div className="calculation-wrapper">
          <section className="calculation-wrapper-plan">
            <section className="summary-plan">
              {yearlyBilling ? (
                <p className="plan-title">
                  {plan} <span>(yearly)</span>
                </p>
              ) : (
                <p className="plan-title">
                  {plan} <span>(monthly)</span>
                </p>
              )}
              <button
                className="change-button"
                onClick={() => setActiveFormStep(2)}>
                Change
              </button>
            </section>
            <section className="summary-plan-price">
              {yearlyBilling ? (
                <p className="price">{`$${prices[plan].yearly}/yr`}</p>
              ) : (
                <p className="price">{`$${prices[plan].monthly}/mo`}</p>
              )}
            </section>
          </section>

          {displayDivider && <div className="divider"></div>}

          {isOnlineService && (
            <section className="summary-add-on">
              <p>Online service</p>
              <>{priceAddOn('isOnlineService')}</>
            </section>
          )}

          {isLargerStorage && (
            <section className="summary-add-on">
              <p>Large storage</p>
              {priceAddOn('isLargerStorage')}
            </section>
          )}

          {isCustomizableProfile && (
            <section className="summary-add-on">
              <p>Customizable profile</p>
              {priceAddOn('isCustomizableProfile')}
            </section>
          )}
        </div>
        <section className="summary-total-wrapper">
          {yearlyBilling ? <p>Total (per year)</p> : <p>Total (per month)</p>}
          <p className="total">
            {calculateTotal(
              yearlyBilling,
              plan,
              isOnlineService,
              isLargerStorage,
              isCustomizableProfile
            )}
          </p>
        </section>
      </div>
    </div>
  )
}

export default FormSummary
