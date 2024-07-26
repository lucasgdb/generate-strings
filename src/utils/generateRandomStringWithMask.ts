/* eslint-disable no-continue */
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
import { getRandomInteger } from "../helpers/getRandomInteger";

const DEFAULT_MASK = "@#$%-@#$%-@#$%-@#$%";
const DEFAULT_UPPERCASE_MASK = "@";
const DEFAULT_LOWERCASE_MASK = "#";
const DEFAULT_SPECIAL_MASK = "$";
const DEFAULT_NUMBER_MASK = "%";

export type generateRandomStringWithMaskProps = {
  mask?: string;
  upperCaseMask?: string;
  lowerCaseMask?: string;
  specialMask?: string;
  numberMask?: string;

  upperCase?: boolean;
  upperCaseCharacters?: string;
  lowerCase?: boolean;
  lowerCaseCharacters?: string;
  special?: boolean;
  specialCharacters?: string;
  number?: boolean;
  numberCharacters?: string;
};

export function generateRandomStringWithMask(config?: generateRandomStringWithMaskProps) {
  const mask = config?.mask ?? DEFAULT_MASK;

  if (mask.length === 0) {
    throw new Error('Mask wrong. Please put something like "@#$%-@#$%-#@$%"');
  }

  const hasUpperCases = config?.upperCase ?? DEFAULT_HAS_UPPERCASE_CHARACTERS;
  const hasLowerCases = config?.lowerCase ?? DEFAULT_HAS_LOWERCASE_CHARACTERS;
  const hasSpecials = config?.special ?? DEFAULT_HAS_SPECIAL_CHARACTERS;
  const hasNumbers = config?.number ?? DEFAULT_HAS_NUMBER_CHARACTERS;

  if (!hasUpperCases && !hasLowerCases && !hasSpecials && !hasNumbers) {
    throw new Error("You must set at least 1 character type.");
  }

  const upperCaseMask = config?.upperCaseMask ?? DEFAULT_UPPERCASE_MASK;
  const lowerCaseMask = config?.lowerCaseMask ?? DEFAULT_LOWERCASE_MASK;
  const specialMask = config?.specialMask ?? DEFAULT_SPECIAL_MASK;
  const numberMask = config?.numberMask ?? DEFAULT_NUMBER_MASK;

  if (!upperCaseMask || upperCaseMask.length > 1) {
    throw new Error("upperCaseMask must have 1 character");
  }

  if (!lowerCaseMask || lowerCaseMask.length > 1) {
    throw new Error("lowerCaseMask must have 1 character");
  }

  if (!specialMask || specialMask.length > 1) {
    throw new Error("specialMask must have 1 character");
  }

  if (!numberMask || numberMask.length > 1) {
    throw new Error("numberMask must have 1 character");
  }

  const upperCaseCharacters = config?.upperCaseCharacters ?? DEFAULT_UPPERCASE_CHARACTERS;

  if (!upperCaseCharacters) {
    throw new Error("Set at least 1 character for upperCases");
  }

  const lowerCaseCharacters = config?.lowerCaseCharacters ?? DEFAULT_LOWERCASE_CHARACTERS;

  if (!lowerCaseCharacters) {
    throw new Error("Set at least 1 character for lowerCases");
  }

  const specialCharacters = config?.specialCharacters ?? DEFAULT_SPECIAL_CHARACTERS;

  if (!specialCharacters) {
    throw new Error("Set at least 1 character for specials");
  }

  const numberCharacters = config?.numberCharacters ?? DEFAULT_NUMBER_CHARACTERS;

  if (!numberCharacters) {
    throw new Error("Set at least 1 character for numbers");
  }

  let randomMaskedText = "";

  for (let i = 0; i < mask.length; i += 1) {
    if (mask[i] === upperCaseMask) {
      const randomPosition = getRandomInteger(0, upperCaseCharacters.length - 1);

      randomMaskedText += upperCaseCharacters[randomPosition];
      continue;
    }

    if (mask[i] === lowerCaseMask) {
      const randomPosition = getRandomInteger(0, lowerCaseCharacters.length - 1);

      randomMaskedText += lowerCaseCharacters[randomPosition];
      continue;
    }

    if (mask[i] === specialMask) {
      const randomPosition = getRandomInteger(0, specialCharacters.length - 1);

      randomMaskedText += specialCharacters[randomPosition];
      continue;
    }

    if (mask[i] === numberMask) {
      const randomPosition = getRandomInteger(0, numberCharacters.length - 1);

      randomMaskedText += numberCharacters[randomPosition];
      continue;
    }

    randomMaskedText += mask[i];
  }

  return randomMaskedText;
}

export default generateRandomStringWithMask;
