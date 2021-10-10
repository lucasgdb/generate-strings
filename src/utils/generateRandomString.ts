import getCharacters from '../helpers/getCharacters';
import getRandomInteger from '../helpers/getRandomInteger';

const DEFAULT_STRING_LENGTH = 8;

type getRandomStringProps = {
   stringLength?: number;
   possibleCharacters: string;
};

function getRandomString(props: getRandomStringProps) {
   const stringLength = props?.stringLength ?? DEFAULT_STRING_LENGTH;
   if (stringLength <= 0) {
      throw new Error('stringLength must be greater than 0.');
   }

   let randomString = '';
   const characters = props.possibleCharacters;

   for (let i = 0; i < stringLength; i += 1) {
      const randomPosition = getRandomInteger(0, characters.length - 1);
      randomString += characters[randomPosition];
   }

   return randomString;
}

type Config = {
   upperCase?: boolean;
   upperCaseCharacters?: string;
   lowerCase?: boolean;
   lowerCaseCharacters?: string;
   special?: boolean;
   specialCharacters?: string;
   number?: boolean;
   numberCharacters?: string;

   stringLength?: number;
};

export function generateRandomString(config?: Config) {
   const possibleCharacters = getCharacters(config);
   const randomString = getRandomString({
      stringLength: config?.stringLength,
      possibleCharacters,
   });

   return randomString;
}

export default generateRandomString;
