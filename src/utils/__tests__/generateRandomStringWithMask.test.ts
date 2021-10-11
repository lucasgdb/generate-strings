import {
   generateRandomStringWithMask,
   Config,
} from '../generateRandomStringWithMask';

describe('generateRandomStringWithMask', () => {
   it('should throw "Mask wrong. Please put something like "@#$%-@#$%-#@$%"" error', () => {
      expect(() => generateRandomStringWithMask({ mask: '' })).toThrowError(
         'Mask wrong. Please put something like "@#$%-@#$%-#@$%"'
      );
   });

   it('should throw "You must set at least 1 character type" error', () => {
      const config: Config = {
         upperCase: false,
         lowerCase: false,
         special: false,
         number: false,
      };

      expect(() => generateRandomStringWithMask(config)).toThrowError(
         'You must set at least 1 character type.'
      );
   });

   it('should throw "upperCaseMask must have 1 character" error', () => {
      expect(() => {
         generateRandomStringWithMask({ upperCaseMask: '' });
      }).toThrowError('upperCaseMask must have 1 character');

      expect(() => {
         generateRandomStringWithMask({ upperCaseMask: '@#' });
      }).toThrowError('upperCaseMask must have 1 character');
   });

   it('should throw "lowerCaseMask must have 1 character" error', () => {
      expect(() => {
         generateRandomStringWithMask({ lowerCaseMask: '' });
      }).toThrowError('lowerCaseMask must have 1 character');

      expect(() => {
         generateRandomStringWithMask({ lowerCaseMask: '@#' });
      }).toThrowError('lowerCaseMask must have 1 character');
   });

   it('should throw "specialMask must have 1 character" error', () => {
      expect(() => {
         generateRandomStringWithMask({ specialMask: '' });
      }).toThrowError('specialMask must have 1 character');

      expect(() => {
         generateRandomStringWithMask({ specialMask: '@#' });
      }).toThrowError('specialMask must have 1 character');
   });

   it('should throw "numberMask must have 1 character" error', () => {
      expect(() => {
         generateRandomStringWithMask({ numberMask: '' });
      }).toThrowError('numberMask must have 1 character');

      expect(() => {
         generateRandomStringWithMask({ numberMask: '@#' });
      }).toThrowError('numberMask must have 1 character');
   });

   it('should throw "Set at least 1 character for upperCases" error', () => {
      const config: Config = { upperCaseCharacters: '' };

      expect(() => generateRandomStringWithMask(config)).toThrowError(
         'Set at least 1 character for upperCases'
      );
   });

   it('should throw "Set at least 1 character for lowerCases" error', () => {
      const config: Config = { lowerCaseCharacters: '' };

      expect(() => generateRandomStringWithMask(config)).toThrowError(
         'Set at least 1 character for lowerCases'
      );
   });

   it('should throw "Set at least 1 character for specials" error', () => {
      const config: Config = { specialCharacters: '' };

      expect(() => generateRandomStringWithMask(config)).toThrowError(
         'Set at least 1 character for specials'
      );
   });

   it('should throw "Set at least 1 character for numbers" error', () => {
      const config: Config = { numberCharacters: '' };

      expect(() => generateRandomStringWithMask(config)).toThrowError(
         'Set at least 1 character for numbers'
      );
   });
});
