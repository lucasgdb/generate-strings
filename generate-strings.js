(function (root, generate) {
  if (typeof define === 'function' && define.amd)
    define([], generate);
  else if (typeof exports === 'object')
    exports.generate = generate
  else root.generate = generate

})(this, function (obj = {}) {
  let str = '',
    amount = obj.amount === undefined ? 1 : obj.amount
  const upperCase = obj.upperCase === undefined ? true : obj.upperCase,
    upperCases = obj.upperCases === undefined ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : obj.upperCases,
    lowerCase = obj.lowerCase === undefined ? true : obj.lowerCase,
    lowerCases = obj.lowerCases === undefined ? 'abcdefghijklmnopqrstuvwxyz' : obj.lowerCases,
    special = obj.special === undefined ? false : obj.special,
    specials = obj.specials === undefined ? "!@#$%&*()=[]{}" : obj.specials,
    number = obj.number === undefined ? true : obj.number,
    numbers = obj.numbers === undefined ? '0123456789' : obj.numbers,
    mode = obj.mode === undefined ? 'random' : obj.mode

  if (!(amount > 0))
    throw new Error('Amount must be > 0')

  if (mode === 'random') {
    const length = obj.length === undefined ? 8 : obj.length,
      characters = (upperCase === true ? upperCases : '') + (lowerCase === true ? lowerCases : '') +
      (special === true ? specials : '') + (number === true ? numbers : ''),
      strings = []

    if (characters === '')
      throw new Error('You must set at least 1 character type for generate a random string')

    do {
      for (let i = 0; i < length; i++)
        str += characters[parseInt(Math.random() * characters.length)]

      strings.push(str)
      str = ''
      amount--
    } while (amount > 0)

    return strings.length === 1 ? strings[0] : strings
  } else if (mode === 'password') {
    const length = obj.length === undefined ? 8 : obj.length,
      showStrength = obj.showStrength === undefined ? false : obj.showStrength,
      firstCharType = obj.firstCharType === undefined ? 'random' : obj.firstCharType,
      excludeEqualChars = obj.excludeEqualChars === undefined ? true : obj.excludeEqualChars,
      characters = (upperCase === true ? upperCases : '') + (lowerCase === true ? lowerCases : '') +
      (special === true ? specials : '') + (number === true ? numbers : ''),
      password = []

    if (characters === '')
      throw new Error('You must set at least 1 character type for generate a password')

    if (length < 1)
      throw new Error('Length must be > 1')

    do {
      if (firstCharType === 'upperCase') {
        if (upperCases === '')
            throw new Error('Set at least 1 character for upperCase')
        str += upperCases[parseInt(Math.random() * upperCases.length)]
      }
      else if (firstCharType === 'lowerCase') {
        if (lowerCases === '')
            throw new Error('Set at least 1 character for lowerCase')
        str += lowerCases[parseInt(Math.random() * lowerCases.length)]
      }
      else if (firstCharType === 'special') {
        if (specials === '')
            throw new Error('Set at least 1 character for special')
        str += specials[parseInt(Math.random() * specials.length)]
      }
      else if (firstCharType === 'number') {
        if (numbers === '')
            throw new Error('Set at least 1 character for number')
        str += numbers[parseInt(Math.random() * numbers.length)]
      }
      else str += characters[parseInt(Math.random() * characters.length)]

      for (let i = 0; i < length - 1; i++) {
        let char = characters[parseInt(Math.random() * characters.length)]

        if (excludeEqualChars)
          while (str[i] === char)
            char = characters[parseInt(Math.random() * characters.length)]

        str += char
      }

      if (showStrength)
        password.push({
          password: str,
          strength: checkStrength(str)
        })
      else password.push(str)

      str = ''
      amount--
    } while (amount > 0)

    return password.length === 1 ? password[0] : password
  } else if (mode === 'mask') {
    const mask = obj.mask === undefined ? '@#$%-@#$%-@#$%-@#$%' : obj.mask,
      upperCaseMask = obj.upperCaseMask === undefined ? '@' : obj.upperCaseMask,
      lowerCaseMask = obj.lowerCaseMask === undefined ? '#' : obj.lowerCaseMask,
      specialMask = obj.specialMask === undefined ? '$' : obj.specialMask,
      numberMask = obj.numberMask === undefined ? '%' : obj.numberMask,
      strings = []

    if (mask.length === 0)
      throw new Error('Mask wrong. Please do something like "@#$%-@#$%-#@$%-@#$%"')
    else if (upperCaseMask === '' || upperCaseMask.length > 1)
      throw new Error('upperCaseMask must have only 1 character')
    else if (lowerCaseMask === '' || lowerCaseMask.length > 1)
      throw new Error('lowerCaseMask must have only 1 character')
    else if (specialMask === '' || specialMask.length > 1)
      throw new Error('specialMask must have only 1 character')
    else if (numberMask === '' || numberMask.length > 1)
      throw new Error('numberMask must have only 1 character')

    do {
      for (let i = 0; i < mask.length; i++)
        if (mask[i] === upperCaseMask) {
          if (upperCases === '')
            throw new Error('Set at least 1 character for upperCases')
          str += upperCases[parseInt(Math.random() * upperCases.length)]
        }
        else if (mask[i] === lowerCaseMask) {
          if (lowerCases === '')
            throw new Error('Set at least 1 character for lowerCases')
          str += lowerCases[parseInt(Math.random() * lowerCases.length)]
        }
        else if (mask[i] === specialMask) {
          if (specials === '')
            throw new Error('Set at least 1 character for specials')
          str += specials[parseInt(Math.random() * specials.length)]
        }
        else if (mask[i] === numberMask) {
          if (numbers === '')
            throw new Error('Set at least 1 character for numbers')
          str += numbers[parseInt(Math.random() * numbers.length)]
        }
        else str += mask[i]

      strings.push(str)
      str = ''
      amount--
    } while (amount > 0)

    return strings.length === 1 ? strings[0] : strings
  } else
    throw new Error('Wrong mode, please set "mode" to "random" or "password" or "mask"')
})

function checkStrength(password = String) {
  let length = 0

  length += Math.min(6, password.length) * 10
  length += Math.min(2, password.length - password.replace(/[A-Z]/g, '').length) * 5
  length += Math.min(2, password.length - password.replace(/[a-z]/g, '').length) * 5
  length += Math.min(2, password.length - password.replace(/[0-9]/g, '').length) * 5
  length += Math.min(2, password.replace(/[a-zA-Z0-9]/g, '').length) * 5

  for (let i = 1; i < password.length; i++)
    if (password[i - 1] === password[i]) {
      length -= 30
      break
    }

  if (length < 50)
    return 'unacceptable'
  else if (length < 60)
    return 'terrible'
  else if (length < 80)
    return 'medium'
  else if (length < 100)
    return 'good'
  else return 'high'
}