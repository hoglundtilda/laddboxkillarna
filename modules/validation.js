import * as pattern from './pattern'

export const validateOrder = (order) => {
  const isValid = {
    firstName: pattern.name.test(order.firstName),
    lastName: pattern.name.test(order.lastName),
    street: pattern.isNotEmpty(order.street),
    postNr: pattern.postNr.test(order.postNr),
    state: pattern.isNotEmpty(order.state),
    email: pattern.email.test(order.email),
    phoneNr: pattern.phoneNr.test(order.phoneNr),
    color: pattern.isNotEmpty(order.color),
  }
  return Object.values(isValid).every((item) => item === true)
}

export const validateContactEmail = (email) => {
  const isValid = {
    firstName: pattern.name.test(email.firstName),
    lastName: pattern.name.test(email.lastName),
    email: pattern.email.test(email.email),
  }

  return Object.values(isValid).every((item) => item === true)
}
