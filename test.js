const str = require('./generate-strings')

const randomString = str.generate({
  amount: 3,
  special: true,
  length: 10
})

console.log('Generating a random string:\n', randomString)

const password = str.generate({
  mode: 'password',
  amount: 10,
  length: 6,
  special: true,
  showStrength: true,
  excludeEqualChars: false
})

console.log('\n\nGenerating a random password:\n', password)

const stringWithMask = str.generate({
  mode: 'mask',
  upperCaseMask: '&',
  lowerCaseMask: '0',
  mask: 'i\'m a string mask, and the result is: & 0 @ # $ %',
  upperCases: 'ABCDEF',
  lowerCases: 'abcdef',
  special: true,
  specials: '+-=[]~',
  numbers: '012345',
})

console.log('\n\nGenerating a random string with mask:\n', stringWithMask)