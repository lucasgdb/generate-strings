import {
   DEFAULT_HAS_UPPERCASE_CHARACTERS,
   DEFAULT_UPPERCASE_CHARACTERS,
   DEFAULT_HAS_LOWERCASE_CHARACTERS,
   DEFAULT_LOWERCASE_CHARACTERS,
   DEFAULT_HAS_SPECIAL_CHARACTERS,
   DEFAULT_SPECIAL_CHARACTERS,
   DEFAULT_HAS_NUMBER_CHARACTERS,
   DEFAULT_NUMBER_CHARACTERS,
} from '../constants/defaults';

type getCharactersProps = {
   upperCase?: boolean;
   upperCaseCharacters?: string;
   lowerCase?: boolean;
   lowerCaseCharacters?: string;
   special?: boolean;
   specialCharacters?: string;
   number?: boolean;
   numberCharacters?: string;
};

const getCharacters = (props?: getCharactersProps) => {
   const hasUpperCases = props?.upperCase ?? DEFAULT_HAS_UPPERCASE_CHARACTERS;
   const hasLowerCases = props?.lowerCase ?? DEFAULT_HAS_LOWERCASE_CHARACTERS;
   const hasSpecials = props?.special ?? DEFAULT_HAS_SPECIAL_CHARACTERS;
   const hasNumbers = props?.number ?? DEFAULT_HAS_NUMBER_CHARACTERS;

   if (!hasUpperCases && !hasLowerCases && !hasSpecials && !hasNumbers) {
      throw new Error('You must set at least 1 character type.');
   }

   const upperCaseCharacters =
      props?.upperCaseCharacters ?? DEFAULT_UPPERCASE_CHARACTERS;
   const lowerCaseCharacters =
      props?.lowerCaseCharacters ?? DEFAULT_LOWERCASE_CHARACTERS;
   const specialCharacters =
      props?.specialCharacters ?? DEFAULT_SPECIAL_CHARACTERS;
   const numberCharacters =
      props?.numberCharacters ?? DEFAULT_NUMBER_CHARACTERS;

   let characters = '';

   if (hasUpperCases) {
      characters += upperCaseCharacters;
   }

   if (hasLowerCases) {
      characters += lowerCaseCharacters;
   }

   if (hasSpecials) {
      characters += specialCharacters;
   }

   if (hasNumbers) {
      characters += numberCharacters;
   }

   return characters;
};

export default getCharacters;
