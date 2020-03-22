const validatePassword = (password) => {
  const alphaChar = 'abcdefghijklmnopqrstuvwxyz' //add more for i18n
  const specialChar = '~!@#$%^&*()_+'
  
  return !(password.length < 8
   || !hasNum(password)
   || !hasChar(password, alphaChar.toUpperCase().split(''))
   || !hasChar(password, alphaChar.split(''))
   || !hasChar(password, specialChar.split('')))
}

const hasChar = (password, characters) => {
  for (var i = 0; i < password.length; i++) {
    if (characters.includes(password.charAt(i))) {
      return true
    }
  }
}

const hasNum = (password) => {
  for (var i = 0; i < password.length; i++) {
    if (!isNaN(password.charAt(i))) {
      return true
    }
  }
}

module.exports = validatePassword