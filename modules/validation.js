import * as pattern from './pattern'

export const validateOrder = (order) => {
  const isValid = {
    street: pattern.isNotEmpty(order.street),
    postNr: pattern.postNr.test(order.postNr),
    state: pattern.isNotEmpty(order.state),
    email: pattern.email.test(order.email),
    phoneNr: pattern.phoneNr.test(order.phoneNr),
    color: pattern.isNotEmpty(order.color),
  }
  return isValid
  //return Object.values(isValid).every((item) => item === true)
}

export const validateContactEmail = (email) => {
  const isValid = {
    email: pattern.email.test(email.email),
    subject: pattern.isNotEmpty(email.subject),
    message: pattern.isNotEmpty(email.message)
  }

  return Object.values(isValid).every((item) => item === true)
}
