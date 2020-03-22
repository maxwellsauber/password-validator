const validatePassword = (password) => {
  const alphaChar = 'abcdefghijklmnopqrstuvwxyz' //add more for i18n
  const specialChar = '~!@#$%^&*()_+'
  
  return !(password.length < 8
   || !includesNum(password)
   || !includesChar(password, alphaChar.toUpperCase().split(''))
   || !includesChar(password, alphaChar.split(''))
   || !includesChar(password, specialChar.split('')))
}

const includesChar = (password, characters) => {
  for (var i = 0; i < password.length; i++) {
    if (characters.includes(password.charAt(i))) {
      return true
    }
  }
}

const includesNum = (password) => {
  for (var i = 0; i < password.length; i++) {
    if (!isNaN(password.charAt(i))) {
      return true
    }
  }
}

module.exports = validatePassword