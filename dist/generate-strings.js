module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(977);
/******/ })
/************************************************************************/
/******/ ({

/***/ 977:
/***/ (function(__unusedmodule, exports) {

(function (root, generate) {
  if (typeof define === 'function' && define.amd)
    define([], generate);
  else if (true)
    exports.generate = generate
  else {}

})(this, function (obj = {}) {
  let str = '',
    amount = obj.amount === undefined ? 1 : obj.amount
  const upperCase = obj.upperCase === undefined ? true : obj.upperCase,
    upperCases = obj.upperCases === undefined ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : obj.upperCases,
    lowerCase = obj.lowerCase === undefined ? true : obj.lowerCase,
    lowerCases = obj.lowerCases === undefined ? 'abcdefghijklmnopqrstuvwxyz' : obj.lowerCases,
    special = obj.special === undefined ? false : obj.special,
    specials = obj.specials = undefined ? '!@#$%&*()=[]{}' : obj.specials,
    number = obj.number === undefined ? true : obj.number,
    numbers = obj.numbers === undefined ? '0123456789' : obj.numbers,
    mode = obj.mode === undefined ? 'random' : obj.mode

  if (!(amount > 0))
    throw new Error('Amount should be > 0')

  if (mode === 'random') {
    const length = obj.length === undefined ? 8 : obj.length,
    characters = (upperCase === true ? upperCases : '') + (lowerCase === true ? lowerCases : '') +
    (special === true ? specials : '') + (number === true ? numbers : ''),
      strings = []

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
      characters = (upperCase === true ? upperCases : '') + (lowerCase === true ? lowerCases : '') +
      (special === true ? specials : '') + (number === true ? numbers : ''),
      password = []

    if (length < 6)
      throw new Error('Length should be > 5')

    do {
      if (firstCharType === 'upperCase')
        str += upperCases[parseInt(Math.random() * upperCases.length)]
      else if (firstCharType === 'lowerCase')
        str += lowerCases[parseInt(Math.random() * lowerCases.length)]
      else if (firstCharType === 'special')
        str += specials[parseInt(Math.random() * specials.length)]
      else if (firstCharType === 'number')
        str += numbers[parseInt(Math.random() * numbers.length)]
      else str += characters[parseInt(Math.random() * characters.length)]

      for (let i = 0; i < length - 1; i++) {
        let char = characters[parseInt(Math.random() * characters.length)]

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
      strings = []

    if (mask.length === 0)
      throw new Error('Mask wrong. Please do something like "@#$%-@#$%-#@$%-@#$%"')

    do {
      for (let i = 0; i < mask.length; i++)
        if (mask[i] === '@')
          str += upperCases[parseInt(Math.random() * upperCases.length)]
      else if (mask[i] === '#')
        str += lowerCases[parseInt(Math.random() * lowerCases.length)]
      else if (mask[i] === '$')
        str += specials[parseInt(Math.random() * specials.length)]
      else if (mask[i] === '%')
        str += numbers[parseInt(Math.random() * numbers.length)]
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

/***/ })

/******/ });