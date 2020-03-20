const validatePassword = (password) => {
  const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']  
  
  const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
 
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
    
  if (password.length < 8) {return false}
  if (!checkNumber(password)) { return false }
  if (!checkCharacters(password, upperCaseCharacters)) {return false}
  if (!checkCharacters(password, lowerCaseCharacters)) {return false}
  if (!checkCharacters(password, specialCharacters)) {return false}
  return true
}

const checkCharacters = (password, characters) => {
  for (var i = 0; i < password.length; i++) {
    if (characters.includes(password.charAt(i))) {
      return true
    }
  }
}

const checkNumber = (password) => {
  for (var i = 0; i < password.length; i++) {
    if (!isNaN(password.charAt(i))) {
      return true
    }
  }
}
module.exports = validatePassword