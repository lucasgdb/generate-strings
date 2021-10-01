# generate-strings dev branch

# Generate random strings, strings with mask and strength passwords

`generate-string` is a string generator that build random strings, strings with mask and passwords with password-strength tester.
It is lightweight, extensible, has no dependencies, and can be used on the server with NodeJS or in-browser with JS.

[![Build Status](https://travis-ci.com/LucasNaja/generate-strings.svg?branch=master)](https://travis-ci.com/LucasNaja/generate-strings)

[![Generate-Strings NPM](https://nodei.co/npm/generate-strings.png?downloads=true&downloadRank=true)](http://npmjs.org/package/generate-strings)

## Installing

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

## Features

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

## Usage

After you've included it into your project, using the module is straightforward:

#### `generate({options})`

### Server-side

```javascript
// require the module
const str = require("generate-strings");

console.log(str.generate());
```

### In-browser

```javascript
// in the browser, including the script will make a generate() function available.
console.log(generate());
```

## Configuring

The module may be configured as follows:
OBS: The settings shown below are the defaults.

```javascript
const str = require("generate-strings");

// Pass a hash of settings into an object.
const settings = {
  // available settings will be shown below
};

// and then:
const string = str.generate(settings);
```

### Available options for all three modes (**random, password, mask**)

| Name       | Type    | Description                          | Default value                | Allowed values               |
| ---------- | ------- | ------------------------------------ | ---------------------------- | ---------------------------- |
| amount     | Integer | Amount of strings to generate        | 1                            | 0-Number.MAX_SAFE_INTEGER    |
| mode       | String  | Different modes to generate a string | 'random'                     | 'random', 'mask', 'password' |
| upperCases | String  | UpperCase letters to be generate     | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' | 'A-Z'                        |
| lowerCases | String  | LowerCase letters to be generate     | 'abcdefghijklmnopqrstuvwxyz' | 'a-z'                        |
| specials   | String  | Special letters to be generate       | '!@#$%&\*()=[]{}'            | All special characters       |
| numbers    | String  | Numbers to be generate               | '0123456789'                 | 0-9                          |

### Available options for both **random and password** modes

| Name      | Type    | Description                                | Default value | Allowed values            |
| --------- | ------- | ------------------------------------------ | ------------- | ------------------------- |
| length    | Integer | Size of the strings that will be generated | 8             | 0-Number.MAX_SAFE_INTEGER |
| upperCase | Boolean | Determines whether it will be generated    | true          | true and false            |
| lowerCase | Boolean | Determines whether it will be generated    | true          | true and false            |
| special   | Boolean | Determines whether it will be generated    | false         | true and false            |
| number    | Boolean | Determines whether it will be generated    | true          | true and false            |

### Available options for **password** mode

| Name              | Type    | Description                            | Default value | Allowed values                                          |
| ----------------- | ------- | -------------------------------------- | ------------- | ------------------------------------------------------- |
| showStrength      | Boolean | Shows the password strength            | false         | true and false                                          |
| firstCharType     | String  | Determines the type of first character | 'random'      | 'random', 'upperCase', 'lowerCase', 'special', 'number' |
| excludeEqualChars | Boolean | Excludes characters that are equals    | true          | true and false                                          |

### Available options for **mask** mode

| Name          | Type   | Description                                   | Default value         | Allowed values |
| ------------- | ------ | --------------------------------------------- | --------------------- | -------------- |
| mask          | String | Mask to string that will be generated         | '@#$%-@#$%-@#$%-@#$%' | \*             |
| upperCaseMask | String | Letter that will be replaced a upperCase char | '@'                   | '\*'           |
| lowerCaseMask | String | Letter that will be replaced a upperCase char | '#'                   | '\*'           |
| specialMask   | String | Letter that will be replaced a upperCase char | '$'                   | '\*'           |
| numberMask    | String | Letter that will be replaced a upperCase char | '%'                   | '\*'           |

## Examples

```javascript
const str = require("generate-strings");

const settings = {
  mode: "password",
  length: 12,
  special: true,
  showStrength: true,
  excludeEqualChars: true,
};

const pass = str.generate(settings); // will return a random object like: { password: 'T2$he{Yk6pvf', strength: 'high' }
```

```javascript
const str = require("generate-strings");

const settings = {
  mode: "mask",
  upperCaseMask: "&",
  mask: "####_####%@hotmail.com",
};

const pass = str.generate(settings); // will return a random string like: ekts_raqm1@hotmail.com
```

## Testing

To run the test, simply type `cd` into directory and run `npm test`. You
may first need to run `npm install` to install the required development
dependencies. (These dependencies are **not** required in a production
environment, and facilitate only unit testing.)

## Contributing

If you'd like to contribute, please fork this repository, change the branch typing `git switch dev`, make a new branch typing `git checkout -b branchName`, make your changes, make a push typing `git push -u origin branchName` and then submit a pull-request.
