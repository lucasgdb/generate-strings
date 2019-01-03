# generate-strings
Generate random strings, strings with mask and strength passwords
============================
`generate-string` is a string generator that build random strings, strings with mask and passwords with password-strength tester.
It is lightweight, extensible, has no dependencies, and can be used on the server with NodeJS or in-browser with JavaScript.

[![Build Status](https://travis-ci.com/LucasNaja/generate-strings.svg?branch=master)](https://travis-ci.com/LucasNaja/generate-strings)

Installing
----------
### Server-side (NodeJS)
From the command line:

```sh
npm install generate-strings --save
```

### In-browser
Within your document:

```html
<script src="generate-strings.js"></script>
```

Features
--------
1. Generate random strings (default) like below:
```sh
,9nlg4^]
```

2. Generate strings with mask like below:
```sh
'@#$%-@#$%-@#$%-@#$%' = 'Aa!0-Aa!0-Aa!0-Aa!0'
```

3. Generate passwords with password-strength tester like below:
```sh
{ password: '2dt4hKIPO*=He', strength: 'high' }
```

Usage
-----
After you've included it into your project, using the module is straightforward:

### Server-side
```javascript
// require the module
const str = require('generate-strings')

// invoke generate() to generate a random string
let string = str.generate(/* settings into object */)

// shows the result
console.log(string) // something like ,9nlg4^]
```

### In-browser
```javascript
// in the browser, including the script will make a generate() function available.
let str = generate() // will return a string
```

Configuring
-----------
The module may be configured as follows:

```javascript
const str = require('generate-strings')

// Pass a hash of settings into an object. The settings shown here are the defaults.
let settings = {
  /*
  *************************************************
  Settings for all modes
  *************************************************
  */
  amount: 1,
  // Number, set the amount of strings to generate

  mode: 'random',
  // String, set the mode. Allows "random", "mask" and "password"

  upperCases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  // String, upperCases characters that will be generated

  lowerCases: 'abcdefghijklmnopqrstuvwxyz',
  // String, lowerCase characters that will be generated

  specials: '!@#$%&*()=[]{}',
  // String, special characters that will be generated

  numbers: '0123456789',
  // String, numbers that will be generated

  /*
  *************************************************
  Settings for random string and password modes
  **************************************************
  */
  length: 8,
  // Number, length of the strings
  // when mode is password, must be > 1

  upperCase: true,
  // Boolean, set a boolean value to generate strings with upperCase characters

  lowerCase: true,
  // Boolean, set a boolean value to generate strings with lowerCase characters

  special: false,
  // Boolean, set a boolean value to generate strings with special characters

  number: true,
  // Boolean, set a boolean value to generate strings with numbers

  /*
  *************************************************
  Settings for password mode
  *************************************************
  */
  showStrength: false,
  // Boolean, shows the password strength
  // like: strength: high. Possible results: unacceptable, terrible, medium, good and high.

  firstCharType: 'random',
  // String, set the type of first character when generate a password
  // 'random' - random type
  // 'upperCase' - to upperCase character
  // 'lowerCase' - to lowerCase character
  // 'special' - to special character
  // 'number' - to number

  excludeEqualChars: true,
  // Boolean, exclude characters that are equals
  // E.g: aa, AA, @@, 00

  /*
  *************************************************
  Settings for mask mode
  *************************************************
  */
  mask: '@#$%-@#$%-@#$%-@#$%',
  // String, mask to generate the strings
  // @ - to upperCase characters
  // # - to lowerCase characters
  // $ - to special characters
  // % - to numbers
  // others: no will be changed

  upperCaseMask: '@',
  // String, must be 1 character

  lowerCaseMask: '#',
  // String, must be 1 character

  specialMask: '$',
  // String, must be 1 character

  numberMask: '%'
  // String, must be 1 character
}

// and then:
let string = str.generate(settings)
```

Testing
-------
To run the test, simply type `cd` into directory and run `npm test`. You
may first need to run `npm install` to install the required development
dependencies. (These dependencies are **not** required in a production
environment, and facilitate only unit testing.)

Contributing
------------
If you'd like to contribute, please fork this repository, change the default branch typing git checkout dev, make your changes, make a new branch and then submit a pull-request.