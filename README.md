# generate-strings

# Generate random strings, strings with mask and strength passwords

`generate-strings` is a string generator that build random strings, strings with mask and passwords with password-strength tester.
It is lightweight, extensible, has no dependencies, typescript support and can be used on the server with NodeJS or in-browser with JS.

[![Build Status](https://travis-ci.com/lucasgdb/generate-strings.svg?branch=master)](https://travis-ci.com/lucasgdb/generate-strings)

## Installing

### Server-side (NodeJS)

From the command line:

```sh
npm install generate-strings --save
```

or

```sh
yarn add generate-strings
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
<script src="generateStrings.min.js"></script>
```

## Features

1. Generate random strings:

```sh
',9nlg4^]'
```

2. Generate strings with mask:

```sh
'@#$%-@#$%-@#$%-@#$%' = 'Aa!0-Aa!0-Aa!0-Aa!0'
```

3. Generate passwords with password-strength tester:

```sh
{ password: '2dt4hKIPO*=He', strength: 'high' }
```

## Usage

After you've included it into your project, using the module is straightforward:

#### `generateRandomString(options)`

#### `generateRandomStringWithMask(options)`

#### `generateRandomPassword(options)`

### Server-side

```javascript
// require the module
const {
   generateRandomString,
   generateRandomStringWithMask,
   generateRandomPassword,
} = require('generate-strings');

console.log(generateRandomString());
console.log(generateRandomStringWithMask());
console.log(generateRandomPassword());
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
import { generateRandomString } from 'generate-strings';

// and then:
const randomString = generateRandomString();
```

### Available options for generateRandomString

| Name                | Type    | Description                               | Default value                | Allowed values            |
| ------------------- | ------- | ----------------------------------------- | ---------------------------- | ------------------------- |
| stringLength        | Integer | Size of the string that will be generated | 8                            | 0-Number.MAX_SAFE_INTEGER |
| upperCase           | Boolean | Determines whether it will be generated   | true                         | true, false               |
| upperCaseCharacters | String  | UpperCase letters to be generated         | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' | 'A-Z'                     |
| lowerCase           | Boolean | Determines whether it will be generated   | true                         | true, false               |
| lowerCaseCharacters | String  | LowerCase letters to be generated         | 'abcdefghijklmnopqrstuvwxyz' | 'a-z'                     |
| special             | Boolean | Determines whether it will be generated   | false                        | true, false               |
| specialCharacters   | String  | Special letters to be generated           | '!@#$%&\*()=[]{}'            | All special characters    |
| number              | Boolean | Determines whether it will be generated   | true                         | true, false               |
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
| showStrength        | Boolean | Shows the password strength                     | false                        | true, false                                             |
| excludeEqualChars   | Boolean | Excludes characters that are consecutive equals | false                        | true, false                                             |
| firstCharType       | String  | Determines the type of first character          | 'random'                     | 'random', 'upperCase', 'lowerCase', 'special', 'number' |
| upperCase           | Boolean | Determines whether it will be generated         | true                         | true, false                                             |
| upperCaseCharacters | String  | UpperCase letters to be generated               | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' | 'A-Z'                                                   |
| lowerCase           | Boolean | Determines whether it will be generated         | true                         | true, false                                             |
| lowerCaseCharacters | String  | LowerCase letters to be generated               | 'abcdefghijklmnopqrstuvwxyz' | 'a-z'                                                   |
| special             | Boolean | Determines whether it will be generated         | false                        | true, false                                             |
| specialCharacters   | String  | Special letters to be generated                 | '!@#$%&\*()=[]{}'            | All special characters                                  |
| number              | Boolean | Determines whether it will be generated         | true                         | true, false                                             |
| numberCharacters    | String  | Numbers to be generated                         | '0123456789'                 | 0-9                                                     |

## Examples

```typescript
import {
   generateRandomString,
   generateRandomStringProps,
} from 'generate-strings';

const settings: generateRandomStringProps = {
   stringLength: 15,
   special: true,
};

const randomStringWithMask = generateRandomString(settings); // will return a string like: bov$Ia@}Rr8gzU*
```

```typescript
import {
   generateRandomStringWithMask,
   generateRandomStringWithMaskProps,
} from 'generate-strings';

const settings: generateRandomStringWithMaskProps = {
   upperCaseMask: '&',
   mask: '####_####%@hotmail.com',
};

const randomStringWithMask = generateRandomStringWithMask(settings); // will return a string like: ekts_raqm1@hotmail.com
```

```typescript
import {
   generateRandomPassword,
   generateRandomPasswordProps,
} from 'generate-strings';

const settings: generateRandomPasswordProps = {
   passwordLength: 12,
   special: true,
   showStrength: true,
   excludeEqualChars: true,
};

const randomPassword = generateRandomPassword(settings); // will return a object like: { password: 'T2$he{Yk6pvf', strength: 'high' }
```

## Testing

To test the application, run `yarn test`. You may first need to run `yarn` to install the required development dependencies. (These dependencies are **not** required in a production environment, and facilitate only unit testing.)
