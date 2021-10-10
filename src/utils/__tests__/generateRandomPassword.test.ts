import { generateRandomPassword } from '../generateRandomPassword';

describe('generateRandomPassword', () => {
   it('should generate a password with 15 characters', () => {
      const randomPassword = generateRandomPassword({ passwordLength: 15 });
      expect(randomPassword.password.length).toBe(15);
   });

   it('should throw "passwordLength should be greater than 0" error', () => {
      const generateRandomPasswordCaller = (passwordLength: number) => () => {
         generateRandomPassword({ passwordLength });
      };

      expect(generateRandomPasswordCaller(0)).toThrowError(
         'passwordLength must be greater than 0.'
      );

      expect(generateRandomPasswordCaller(-5)).toThrowError(
         'passwordLength must be greater than 0.'
      );
   });

   it('should throw "You must set at least 1 character type" error', () => {
      const config = {
         upperCase: false,
         lowerCase: false,
         special: false,
         number: false,
      };

      expect(() => generateRandomPassword(config)).toThrowError(
         'You must set at least 1 character type.'
      );
   });

   it('should throw "You must at least 1 character" error', () => {
      const config = {
         upperCaseCharacters: '',
         lowerCaseCharacters: '',
         specialCharacters: '',
         numberCharacters: '',
      };

      expect(() => {
         generateRandomPassword({ firstCharType: 'random', ...config });
      }).toThrowError('You must at least 1 character');

      expect(() => {
         generateRandomPassword({ firstCharType: 'upperCase', ...config });
      }).toThrowError('You must at least 1 character for upperCase');

      expect(() => {
         generateRandomPassword({ firstCharType: 'lowerCase', ...config });
      }).toThrowError('You must at least 1 character for lowerCase');

      expect(() => {
         generateRandomPassword({ firstCharType: 'special', ...config });
      }).toThrowError('You must at least 1 character for special');

      expect(() => {
         generateRandomPassword({ firstCharType: 'number', ...config });
      }).toThrowError('You must at least 1 character for number');
   });
});
