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
const str = require('generate-strings');

// invoke generate() to generate a random string
const string = str.generate(/* settings into object */)

// shows the result
console.log(string) // something like ,9nlg4^]
```

### In-browser
```javascript
// in the browser, including the script will make a generate() function available.
const str = generate() // will return a string
```

Configuring
-----------
The module may be configured as follows:

```javascript
const str = require('generate-strings');

// Pass a hash of settings into an object. The settings shown here are the defaults.
const settings = {
  /*
  *************************************************
  Settings for all modes
  *************************************************
  */
  amount: 1,
  // set the amount of strings to generate

  mode: 'random',
  // set the mode. Allows "random", "mask" and "password"

  upperCases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  // upperCases characters

  lowerCases: 'abcdefghijklmnopqrstuvwxyz',
  // lowerCase characters

  specials: '!@#$%&*()=[]{}',
  // special characters

  numbers: '0123456789',
  // numbers

  /*
  *************************************************
  Settings for random string and password modes
  **************************************************
  */
  length: 8,
  // length of the strings

  upperCase: true,
  // set a boolean value to generate strings with upperCase characters

  lowerCase: true,
  // set a boolean value to generate strings with lowerCase characters

  special: false,
  // set a boolean value to generate strings with special characters

  number: true,
  // set a boolean value to generate strings with numbers

  /*
  *************************************************
  Settings for password mode
  *************************************************
  */
  showStrength: false,
  // Shows the password strength
  // like: strength: high. Possible results: unacceptable, terrible, medium, good and high.

  firstCharType: 'random',
  // set the type of first character when generate a password
  // 'random' - random type
  // 'upperCase' - to upperCase character
  // 'lowerCase' - to lowerCase character
  // 'special' - to special character
  // 'number' - to number

  /*
  *************************************************
  Settings for mask mode
  *************************************************
  */
  mask: '@#$%-@#$%-@#$%-@#$%' // mask of string
  // @ - to upperCase characters
  // # - to lowerCase characters
  // $ - to special characters
  // % - to numbers
  // others: no will be changed
}

// and then:
const string = str.generate(settings)
```

Testing
-------
To run the test, simply type `cd` into directory and run `npm test`. You
may first need to run `npm install` to install the required development
dependencies. (These dependencies are **not** required in a production
environment, and facilitate only unit testing.)


Contributing
------------
If you'd like to contribute, please fork this repository, change the default branch typing git checkout dev, make your changes, and then submit a pull-request.