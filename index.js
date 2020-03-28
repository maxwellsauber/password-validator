const validatePassword = (password) => {
  const alphaChar = 'abcdefghijklmnopqrstuvwxyz' //add more for i18n
  const numChar = '0123456789'
  const specialChar = '~!@#$%^&*()_+,.?><[]{}|=-\\/'

  return password.length >= 8
    && hasChar(password, alphaChar.toUpperCase().split(''))
    && hasChar(password, alphaChar.split(''))
    && hasChar(password, numChar.split(''))
    && hasChar(password, specialChar.split(''))
}

const hasChar = (password, characters) => {
  for (var i = 0; i < password.length; i++) {
    if (characters.includes(password.charAt(i))) {
      return true
    }
  }
  return false
}
module.exports = validatePassword