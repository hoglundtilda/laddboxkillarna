import * as pattern from './pattern'

export const validateOrder = (order) => {
  let isValid

  isValid = {
    firstName: pattern.name.test(order.firstName),
    lastName: pattern.name.test(order.lastName),
    street: pattern.isNotEmpty(order.street),
    postNr: pattern.postNr.test(order.postNr),
    state: pattern.isNotEmpty(order.state),
    email: pattern.email.test(order.email),
    phoneNr: pattern.phoneNr.test(order.phoneNr),
    color: pattern.isNotEmpty(order.color),
  }

  return isValid
}

export const validateContactEmail = (email) => {
  let isValid

  isValid = {
    firstName: pattern.name.test(email.firstName),
    lastName: pattern.name.test(email.lastName),
    email: pattern.email.test(email.email),
    subject: pattern.isNotEmpty(email.subject),
    message: pattern.isNotEmpty(email.message),
  }

  return isValid
}
