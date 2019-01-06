const str = require('./generate-strings')

const randomString = str.generate({
  amount: 3,
  special: true,
  length: 10
})

console.log('Generating a random string:\n', randomString)

const password = str.generate({
  mode: 'password',
  length: 12,
  special: true,
  showStrength: true,
  excludeEqualChars: true
})

console.log('\n\nGenerating a random password:\n', password)

const stringWithMask = str.generate({
  mode: 'mask',
  upperCaseMask: '&',
  mask: '####_####%@hotmail.com'
})

console.log('\n\nGenerating a random string with mask:\n', stringWithMask)