export const name = /^[a-zA-ZåäöÅÄÖ]+$/

export const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const phoneNr = /(\+\d{2})?((\(0\)\d{2,3})|\d{2,3})?\d+/

export const postNr = /^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/

export const isNotEmpty = (value) => {
  if (value === '') return false
  if (value !== '') return true
}
