const validatePassword = (password) => {
  const alphaChar = 'abcdefghijklmnopqrstuvwxyz' //add more for i18n
  const specialChar = '~!@#$%^&*()_+'
  
  if (password.length < 8) { return false }
  if (!checkNum(password)) { return false }
  if (!checkChar(password, alphaChar.toUpperCase().split(''))) { return false }
  if (!checkChar(password, alphaChar.split(''))) { return false }
  if (!checkChar(password, specialChar.split(''))) { return false }
  return true
}

const checkChar = (password, characters) => {
  for (var i = 0; i < password.length; i++) {
    if (characters.includes(password.charAt(i))) {
      return true
    }
  }
}

const checkNum = (password) => {
  for (var i = 0; i < password.length; i++) {
    if (!isNaN(password.charAt(i))) {
      return true
    }
  }
}

module.exports = validatePassword