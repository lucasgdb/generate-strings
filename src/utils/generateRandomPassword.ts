import {
  DEFAULT_HAS_LOWERCASE_CHARACTERS,
  DEFAULT_HAS_NUMBER_CHARACTERS,
  DEFAULT_HAS_SPECIAL_CHARACTERS,
  DEFAULT_HAS_UPPERCASE_CHARACTERS,
  DEFAULT_LOWERCASE_CHARACTERS,
  DEFAULT_NUMBER_CHARACTERS,
  DEFAULT_SPECIAL_CHARACTERS,
  DEFAULT_UPPERCASE_CHARACTERS,
} from "../constants/defaults";
import { getCharacters } from "../helpers/getCharacters";
import { getRandomInteger } from "../helpers/getRandomInteger";

type CharacterType = "random" | "upperCase" | "lowerCase" | "special" | "number";

const DEFAULT_FIRST_CHAR_TYPE: CharacterType = "random";
const DEFAULT_PASSWORD_LENGTH = 8;
const DEFAULT_SHOW_STRENGTH = true;
const DEFAULT_EXCLUDE_EQUAL_CHARS = false;

function getPasswordStrength(password: string) {
  let points = 0;

  points += Math.min(6, password.length) * 10;
  points += Math.min(2, password.length - password.replace(/[A-Z]/g, "").length) * 5;
  points += Math.min(2, password.length - password.replace(/[a-z]/g, "").length) * 5;
  points += Math.min(2, password.length - password.replace(/[0-9]/g, "").length) * 5;
  points += Math.min(2, password.replace(/[a-zA-Z0-9]/g, "").length) * 5;

  for (let i = 1; i < password.length; i += 1) {
    if (password[i - 1] === password[i]) {
      points -= 30;
      break;
    }
  }

  if (points < 50) {
    return { points, level: 0, result: "unacceptable" };
  }

  if (points < 60) {
    return { points, level: 1, result: "terrible" };
  }

  if (points < 80) {
    return { points, level: 2, result: "medium" };
  }

  if (points < 100) {
    return { points, level: 3, result: "good" };
  }

  return { points, level: 4, result: "high" };
}

type getFirstCharacterProps = {
  upperCase?: boolean;
  upperCaseCharacters?: string;
  lowerCase?: boolean;
  lowerCaseCharacters?: string;
  special?: boolean;
  specialCharacters?: string;
  number?: boolean;
  numberCharacters?: string;

  firstCharType?: CharacterType;
};

function getFirstCharacter(props?: getFirstCharacterProps) {
  const hasUpperCases = props?.upperCase ?? DEFAULT_HAS_UPPERCASE_CHARACTERS;
  const hasLowerCases = props?.lowerCase ?? DEFAULT_HAS_LOWERCASE_CHARACTERS;
  const hasSpecials = props?.special ?? DEFAULT_HAS_SPECIAL_CHARACTERS;
  const hasNumbers = props?.number ?? DEFAULT_HAS_NUMBER_CHARACTERS;

  if (!hasUpperCases && !hasLowerCases && !hasSpecials && !hasNumbers) {
    throw new Error("You must set at least 1 character type.");
  }

  const character = {
    upperCase: props?.upperCaseCharacters ?? DEFAULT_UPPERCASE_CHARACTERS,
    lowerCase: props?.lowerCaseCharacters ?? DEFAULT_LOWERCASE_CHARACTERS,
    special: props?.specialCharacters ?? DEFAULT_SPECIAL_CHARACTERS,
    number: props?.numberCharacters ?? DEFAULT_NUMBER_CHARACTERS,
  };

  const firstCharType = props?.firstCharType ?? DEFAULT_FIRST_CHAR_TYPE;

  if (firstCharType === "random") {
    const characters = Object.values(character)
      .flat()
      .reduce((str, char) => `${str}${char}`, "");

    if (characters === "") {
      throw new Error("You must at least 1 character.");
    }

    const randomPosition = getRandomInteger(0, characters.length - 1);
    return characters[randomPosition];
  }

  const characters = character[firstCharType];
  if (characters === "") {
    throw new Error(`You must at least 1 character for ${firstCharType}.`);
  }

  const randomPosition = getRandomInteger(0, characters.length - 1);
  return characters[randomPosition];
}

type getRandomPasswordProps = {
  passwordLength?: number;
  possibleCharacters?: string;
  excludeEqualChars?: boolean;

  upperCase?: boolean;
  upperCaseCharacters?: string;
  lowerCase?: boolean;
  lowerCaseCharacters?: string;
  special?: boolean;
  specialCharacters?: string;
  number?: boolean;
  numberCharacters?: string;

  firstCharType?: CharacterType;
};

function getRandomPassword(props?: getRandomPasswordProps) {
  const passwordLength = props?.passwordLength ?? DEFAULT_PASSWORD_LENGTH;

  if (passwordLength <= 0) {
    throw new Error("passwordLength must be greater than 0.");
  }

  const possibleCharacters = getCharacters(props);
  const firstChar = getFirstCharacter(props);
  const excludeEqualChars = props?.excludeEqualChars ?? DEFAULT_EXCLUDE_EQUAL_CHARS;

  let password = firstChar;

  for (let i = 1; i < passwordLength; i += 1) {
    let randomPosition = getRandomInteger(0, possibleCharacters.length - 1);
    let randomCharacter = possibleCharacters[randomPosition];

    if (excludeEqualChars) {
      while (password[i] === randomCharacter) {
        randomPosition = getRandomInteger(0, possibleCharacters.length - 1);
        randomCharacter = possibleCharacters[randomPosition];
      }
    }

    password += randomCharacter;
  }

  return password;
}

export type generateRandomPasswordProps = {
  upperCase?: boolean;
  upperCaseCharacters?: string;
  lowerCase?: boolean;
  lowerCaseCharacters?: string;
  special?: boolean;
  specialCharacters?: string;
  number?: boolean;
  numberCharacters?: string;

  passwordLength?: number;

  showStrength?: boolean;
  firstCharType?: CharacterType;
  excludeEqualChars?: boolean;
};

export function generateRandomPassword(config?: generateRandomPasswordProps) {
  const showStrength = config?.showStrength ?? DEFAULT_SHOW_STRENGTH;

  const password = getRandomPassword(config);
  const passwordStrength = showStrength ? getPasswordStrength(password) : null;

  return { password, passwordStrength };
}

export default generateRandomPassword;
