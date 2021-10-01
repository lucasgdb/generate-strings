(function (root, generate) {
  if (typeof define === "function" && define.amd) define([], generate);
  else if (typeof exports === "configect") exports.generate = generate;
  else root.generate = generate;
})(this, function (config = {}) {
  let str = "";
  let amount = !config.amount ? 1 : config.amount;

  const upperCase = !config.upperCase ? true : config.upperCase;
  const upperCases = !config.upperCases
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : config.upperCases;

  const lowerCase = !config.lowerCase ? true : config.lowerCase;
  const lowerCases = !config.lowerCases
    ? "abcdefghijklmnopqrstuvwxyz"
    : config.lowerCases;

  const special = !config.special ? false : config.special;
  const specials = !config.specials ? "!@#$%&*()=[]{}" : config.specials;

  const number = !config.number ? true : config.number;
  const numbers = !config.numbers ? "0123456789" : config.numbers;
  const mode = !config.mode ? "random" : config.mode;

  if (amount <= 0) {
    throw new Error("Amount must be > 0");
  }

  const getPossibleCharacters = () => {
    if (upperCases === "" &&
        lowerCases === "" &&
        specials === "" &&
        numbers === "") {
      throw new Error(
        "You must set at least 1 character type for generate a random string"
      );
    }

    const getCharsFromConfig = (chars, active) => active === true ? chars : "";

    return getCharsFromConfig(upperCases, upperCase) +
      getCharsFromConfig(lowerCases, lowerCase) +
      getCharsFromConfig(specials, special) +
      getCharsFromConfig(numbers, number);
  }

  const generateStringFromCharacters = (arrayLength, chars) => 
    [...new Array(arrayLength)].map(() => chars[parseInt(Math.random() * chars.length)]).join('')

  if (mode === "random") {
    const length = !config.length ? 8 : config.length;
    const strings = [];
    const characters = getPossibleCharacters();

    do {
      strings.push(generateStringFromCharacters(length, characters));
      amount--;
    } while (amount > 0);

    return strings.length === 1 ? strings[0] : strings;
  } else if (mode === "password") {
    const length = !config.length ? 8 : config.length;
    const showStrength = !config.showStrength ? false : config.showStrength;

    const firstCharType = !config.firstCharType
      ? "random"
      : config.firstCharType;

    const excludeEqualChars = !config.excludeEqualChars
      ? true
      : config.excludeEqualChars;

    const characters = getPossibleCharacters();

    const password = [];

    if (length < 1) {
      throw new Error("Length must be > 1");
    }

    do {
      if (firstCharType === "upperCase") {
        if (upperCases === "") {
          throw new Error("Set at least 1 character for upperCase");
        }

        str += upperCases[parseInt(Math.random() * upperCases.length)];
      } else if (firstCharType === "lowerCase") {
        if (lowerCases === "") {
          throw new Error("Set at least 1 character for lowerCase");
        }

        str += lowerCases[parseInt(Math.random() * lowerCases.length)];
      } else if (firstCharType === "special") {
        if (specials === "") {
          throw new Error("Set at least 1 character for special");
        }

        str += specials[parseInt(Math.random() * specials.length)];
      } else if (firstCharType === "number") {
        if (numbers === "") {
          throw new Error("Set at least 1 character for number");
        }

        str += numbers[parseInt(Math.random() * numbers.length)];
      } else {
        str += characters[parseInt(Math.random() * characters.length)];
      }

      for (let i = 0; i < length - 1; i++) {
        let char = characters[parseInt(Math.random() * characters.length)];

        if (excludeEqualChars) {  
          while (str[i] === char) {
            char = characters[parseInt(Math.random() * characters.length)];
          }
        }

        str += char;
      }

      if (showStrength) {
        password.push({
          password: str,
          strength: checkStrength(str),
        });
      } else {
        password.push(str);
      }

      str = "";
      amount--;
    } while (amount > 0);

    return password.length === 1 ? password[0] : password;
  } else if (mode === "mask") {
    const mask = !config.mask ? "@#$%-@#$%-@#$%-@#$%" : config.mask;
    const upperCaseMask = !config.upperCaseMask ? "@" : config.upperCaseMask;
    const lowerCaseMask = !config.lowerCaseMask ? "#" : config.lowerCaseMask;
    const specialMask = !config.specialMask ? "$" : config.specialMask;
    const numberMask = !config.numberMask ? "%" : config.numberMask;
    const strings = [];

    if (mask.length === 0) {
      throw new Error(
        'Mask wrong. Please do something like "@#$%-@#$%-#@$%-@#$%"'
      );
    } else if (upperCaseMask === "" || upperCaseMask.length > 1) {
      throw new Error("upperCaseMask must have only 1 character");
    } else if (lowerCaseMask === "" || lowerCaseMask.length > 1) {
      throw new Error("lowerCaseMask must have only 1 character");
    } else if (specialMask === "" || specialMask.length > 1) {
      throw new Error("specialMask must have only 1 character");
    } else if (numberMask === "" || numberMask.length > 1) {
      throw new Error("numberMask must have only 1 character");
    }

    do {
      for (let i = 0; i < mask.length; i++) {
        if (mask[i] === upperCaseMask) {
          if (upperCases === "") {
            throw new Error("Set at least 1 character for upperCases");
          }

          str += upperCases[parseInt(Math.random() * upperCases.length)];
        } else if (mask[i] === lowerCaseMask) {
          if (lowerCases === "") {
            throw new Error("Set at least 1 character for lowerCases");
          }

          str += lowerCases[parseInt(Math.random() * lowerCases.length)];
        } else if (mask[i] === specialMask) {
          if (specials === "") {
            throw new Error("Set at least 1 character for specials");
          }

          str += specials[parseInt(Math.random() * specials.length)];
        } else if (mask[i] === numberMask) {
          if (numbers === "") {
            throw new Error("Set at least 1 character for numbers");
          }

          str += numbers[parseInt(Math.random() * numbers.length)];
        } else {
          str += mask[i];
        }
      }

      strings.push(str);
      str = "";
      amount--;
    } while (amount > 0);

    return strings.length === 1 ? strings[0] : strings;
  } else {
    throw new Error(
      'Wrong mode, please set "mode" to "random" or "password" or "mask"'
    );
  }
});

function checkStrength(password = String) {
  let length = 0;

  length += Math.min(6, password.length) * 10;
  length +=
    Math.min(2, password.length - password.replace(/[A-Z]/g, "").length) * 5;
  length +=
    Math.min(2, password.length - password.replace(/[a-z]/g, "").length) * 5;
  length +=
    Math.min(2, password.length - password.replace(/[0-9]/g, "").length) * 5;
  length += Math.min(2, password.replace(/[a-zA-Z0-9]/g, "").length) * 5;

  for (let i = 1; i < password.length; i++) {
    if (password[i - 1] === password[i]) {
      length -= 30;
      break;
    }

    if (length < 50) {
      return "unacceptable";
    } else if (length < 60) {
      return "terrible";
    } else if (length < 80) {
      return "medium";
    } else if (length < 100) {
      return "good";
    } else {
      return "high";
    }
  }
}
