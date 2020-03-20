// ASK ABOUT CODE FORRRRRMATTTINGGGGG

const validatePassword = (password) => {

  /* var rules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/
         if (password.match(rules)) {
             return true
         }
      */

  // USE A SWITCH STATEMENT
  if (password.length < 8) {  // returns false when not long enough
    return false
  }
  if (!checkUpperCase(password)) {
    return false

  }
  if (!checkLowerCase(password)) {
    return false

  }
  if (!checkNumber(password)) {
    return false

  }
  if (!checkSpecial(password)) {
    return false

  }
  return true

}


const checkUpperCase = (password) => {
  const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  for (var i = 0; i < password.length; i++) {

    if (characters.includes(password.charAt(i))) {
      return true
    }
  }
}
const checkLowerCase = (password) => {
  const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for (var i = 0; i < password.length; i++) {

    if (characters.includes(password.charAt(i))) {
      return true
    }
  }

}
const checkNumber = (password) => {
  const characters = [] // MIGHT BE ABLE TO CHECK IF CHAR IS A NUMBER //toNumber

  for (var i = 0; i < password.length; i++) {

    if (!isNaN(password.charAt(i))) {
      return true
    }
  }


}
const checkSpecial = (password) => {
  const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

  for (var i = 0; i < password.length; i++) {

    if (characters.includes(password.charAt(i))) {
      return true
    }

  }
}


module.exports = validatePassword