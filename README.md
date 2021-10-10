# generate-strings dev branch

# Generate random strings, strings with mask and strength passwords

`generate-string` is a string generator that build random strings, strings with mask and passwords with password-strength tester.
It is lightweight, extensible, has no dependencies, typescript support and can be used on the server with NodeJS or in-browser with JS.

[![Build Status](https://travis-ci.com/lucasgdb/generate-strings.svg?branch=master)](https://travis-ci.com/lucasgdb/generate-strings)

## Installing

### Server-side (NodeJS)

From the command line:

```sh
npm install generate-strings --save
```

### In-browser

Within your document (each one for the desired function)

```html
<script src="generateRandomString.min.js"></script>
<script src="generateRandomStringWithMask.min.js"></script>
<script src="generateRandomPassword.min.js"></script>
```

or

```html
<script src="bundle.min.js"></script>
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
const { generateRandomString } = require('generate-strings');

console.log(generateRandomString());
```

### In-browser

```javascript
// in the browser, including the script will make the function available.
console.log(generateRandomString());
console.log(generateRandomStringWithMask());
console.log(generateRandomPassword());
```

## Configuring

The module may be configured as follows:
OBS: The settings shown below are the defaults.

```javascript
const { generateRandomPassword } = require('generate-strings');

// Pass a hash of settings into an object.
const settings = {
   // available settings will be shown below
};

// and then:
const string = generateRandomPassword(settings);
```

### Available options for generateRandomString

| Name                | Type    | Description                               | Default value                | Allowed values            |
| ------------------- | ------- | ----------------------------------------- | ---------------------------- | ------------------------- |
| stringLength        | Integer | Size of the string that will be generated | 8                            | 0-Number.MAX_SAFE_INTEGER |
| upperCase           | Boolean | Determines whether it will be generated   | true                         | true and false            |
| upperCaseCharacters | String  | UpperCase letters to be generated         | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' | 'A-Z'                     |
| lowerCase           | Boolean | Determines whether it will be generated   | true                         | true and false            |
| lowerCaseCharacters | String  | LowerCase letters to be generated         | 'abcdefghijklmnopqrstuvwxyz' | 'a-z'                     |
| special             | Boolean | Determines whether it will be generated   | false                        | true and false            |
| specialCharacters   | String  | Special letters to be generated           | '!@#$%&\*()=[]{}'            | All special characters    |
| number              | Boolean | Determines whether it will be generated   | true                         | true and false            |
| numberCharacters    | String  | Numbers to be generated                   | '0123456789'                 | 0-9                       |

### Available options for generateRandomStringWithMask

| Name                | Type   | Description                                      | Default value                | Allowed values         |
| ------------------- | ------ | ------------------------------------------------ | ---------------------------- | ---------------------- |
| mask                | String | String mask that will be generated               | '@#$%-@#$%-@#$%-@#$%'        | \*                     |
| upperCaseCharacters | String | UpperCase letters to be generated                | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' | 'A-Z'                  |
| lowerCaseCharacters | String | LowerCase letters to be generated                | 'abcdefghijklmnopqrstuvwxyz' | 'a-z'                  |
| specialCharacters   | String | Special letters to be generated                  | '!@#$%&\*()=[]{}'            | All special characters |
| numberCharacters    | String | Numbers to be generated                          | '0123456789'                 | 0-9                    |
| upperCaseMask       | String | Letter that will be replaced to a upperCase char | '@'                          | '\*'                   |
| lowerCaseMask       | String | Letter that will be replaced to a lowerCase char | '#'                          | '\*'                   |
| specialMask         | String | Letter that will be replaced to a special char   | '$'                          | '\*'                   |
| numberMask          | String | Letter that will be replaced to a number         | '%'                          | '\*'                   |

### Available options for generateRandomPassword

| Name                | Type    | Description                                     | Default value                | Allowed values                                          |
| ------------------- | ------- | ----------------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| passwordLength      | Integer | Size of the strings that will be generated      | 8                            | 0-Number.MAX_SAFE_INTEGER                               |
| showStrength        | Boolean | Shows the password strength                     | false                        | true and false                                          |
| excludeEqualChars   | Boolean | Excludes characters that are consecutive equals | true                         | true and false                                          |
| firstCharType       | String  | Determines the type of first character          | 'random'                     | 'random', 'upperCase', 'lowerCase', 'special', 'number' |
| upperCase           | Boolean | Determines whether it will be generated         | true                         | true and false                                          |
| upperCaseCharacters | String  | UpperCase letters to be generate                | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' | 'A-Z'                                                   |
| lowerCase           | Boolean | Determines whether it will be generated         | true                         | true and false                                          |
| lowerCaseCharacters | String  | LowerCase letters to be generate                | 'abcdefghijklmnopqrstuvwxyz' | 'a-z'                                                   |
| special             | Boolean | Determines whether it will be generated         | false                        | true and false                                          |
| specialCharacters   | String  | Special letters to be generate                  | '!@#$%&\*()=[]{}'            | All special characters                                  |
| number              | Boolean | Determines whether it will be generated         | true                         | true and false                                          |
| numberCharacters    | String  | NumberCharacters to be generate                 | '0123456789'                 | 0-9                                                     |

## Examples

```javascript
const { generateRandomPassword } = require('generate-strings');

const settings = {
   passwordLength: 12,
   special: true,
   showStrength: true,
   excludeEqualChars: true,
};

const pass = generateRandomPassword(settings); // will return a random object like: { password: 'T2$he{Yk6pvf', strength: 'high' }
```

```javascript
const { generateRandomStringWithMask } = require('generate-strings');

const settings = {
   upperCaseMask: '&',
   mask: '####_####%@hotmail.com',
};

const pass = generateRandomStringWithMask(settings); // will return a random string like: ekts_raqm1@hotmail.com
```

## Contributing

If you'd like to contribute, please fork this repository, change the branch typing `git switch dev`, make a new branch typing `git checkout -b branchName`, make your changes, make a push typing `git push -u origin branchName` and then submit a pull-request.
