export const name = /^[a-zA-ZåäöÅÄÖ]+$/

export const email = /^\S+@\S+$/

export const phoneNr = /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/

export const postNr = /^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/

export const isNotEmpty = (value) => {
  if (value === '') return false
  if (value !== '') return true
}
