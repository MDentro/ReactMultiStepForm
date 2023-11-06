export default function checkError(item, field) {
  const errorMessageField = document.getElementById(`${field}-error`)
  const errorInputField = document.getElementById(`${field}-inputfield`)

  if (field === 'phone') {
    return validateNumbers(item, errorMessageField, errorInputField)
  } else if (field === 'email') {
    return validateEmail(item, errorMessageField, errorInputField)
  } else {
    return validateEmptyField(item, errorMessageField, errorInputField)
  }

  function validateNumbers(item, errorMessageField, errorInputField) {
    var number = Number(item)
    if (Number.isNaN(number) || item.trim().length === 0) {
      errorMessageField.classList.add('active')
      errorInputField.classList.add('active')
      return true
    } else {
      errorMessageField.classList.remove('active')
      errorInputField.classList.remove('active')
      return false
    }
  }
}

function validateEmail(item, errorMessageField, errorInputField) {
  const validatedEmail = item
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  if (validatedEmail) {
    errorMessageField.classList.remove('active')
    errorInputField.classList.remove('active')
    return false
  } else {
    errorMessageField.classList.add('active')
    errorInputField.classList.add('active')
    return true
  }
}

function validateEmptyField(item, errorMessageField, errorInputField) {
  if (item.trim().length <= 0) {
    errorMessageField.classList.add('active')
    errorInputField.classList.add('active')
    return true
  } else {
    errorMessageField.classList.remove('active')
    errorInputField.classList.remove('active')
    return false
  }
}
