import React from 'react'
import './FormThankYou.css'
import thankYouIcon from '../../assets/images/icon-thank-you.svg'

const FormThankYou = () => {
  return (
    <div className="inner-form-container">
      <div className="thank-you-wrapper">
        <img src={thankYouIcon} alt="" />
        <p className="thank-you-title">Thank you!</p>

        <p className="thank-you-text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  )
}

export default FormThankYou
