const str = require('./generate-strings')

const randomString = str.generate({
  amount: 3,
  special: true,
  length: 20
})

console.log('Generating a random string: ', randomString)

const password = str.generate({
  mode: 'password',
  length: 12,
  special: true,
  showStrength: true
})

console.log('\n\nGenerating a random password: ', password)

const stringWithMask = str.generate({
  mode: 'mask',
  mask: 'String mask: @ # $ %',
  upperCases: 'A',
  lowerCases: 'a',
  special: true,
  specials: '+',
  numbers: '0'
})

console.log('\n\nGenerating a random string with mask: ', stringWithMask)