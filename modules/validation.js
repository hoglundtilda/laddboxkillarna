import * as pattern from './pattern'

export const validateOrder = (order) => {
  const trimmedOrder = Object.keys(order).map(k => order[k] = typeof order[k] == 'string' ? order[k].trim() : order[k]);
  let isValid

  console.log(trimmedOrder)
  isValid = {
    firstName: pattern.name.test(trimmedOrder[0]),
    lastName: pattern.name.test(trimmedOrder[1]),
    street: pattern.isNotEmpty(trimmedOrder[2]),
    postNr: pattern.postNr.test(trimmedOrder[3]),
    state: pattern.isNotEmpty(trimmedOrder[4]),
    email: pattern.email.test(trimmedOrder[5]),
    phoneNr: pattern.phoneNr.test(trimmedOrder[6]),
    color: pattern.isNotEmpty(order.color),
  }

  return isValid
  //return Object.values(isValid).every((item) => item === true)
}

export const validateContactEmail = (email) => {
  const trimmedEmail = Object.keys(order).forEach(function (key) {
    key = key.trim()
  })

  let isValid

  isValid = {
    firstName: pattern.name.test(trimmedEmail.firstName),
    lastName: pattern.name.test(trimmedEmail.lastName),
    email: pattern.email.test(trimmedEmail.email),
    subject: pattern.isNotEmpty(email.subject),
    message: pattern.isNotEmpty(email.message),
  }

  return Object.values(isValid).every((item) => item === true)
}
