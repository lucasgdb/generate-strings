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
      expect(() => {
         generateRandomPassword({
            upperCase: false,
            lowerCase: false,
            special: false,
            number: false,
         });
      }).toThrowError('You must set at least 1 character type.');
   });

   it('should throw "You must at least 1 character" error', () => {
      expect(() => {
         generateRandomPassword({
            firstCharType: 'random',
            upperCaseCharacters: '',
            lowerCaseCharacters: '',
            specialCharacters: '',
            numberCharacters: '',
         });
      }).toThrowError('You must at least 1 character');

      expect(() => {
         generateRandomPassword({
            firstCharType: 'upperCase',
            upperCaseCharacters: '',
            lowerCaseCharacters: '',
            specialCharacters: '',
            numberCharacters: '',
         });
      }).toThrowError('You must at least 1 character for upperCase');

      expect(() => {
         generateRandomPassword({
            firstCharType: 'lowerCase',
            upperCaseCharacters: '',
            lowerCaseCharacters: '',
            specialCharacters: '',
            numberCharacters: '',
         });
      }).toThrowError('You must at least 1 character for lowerCase');

      expect(() => {
         generateRandomPassword({
            firstCharType: 'special',
            upperCaseCharacters: '',
            lowerCaseCharacters: '',
            specialCharacters: '',
            numberCharacters: '',
         });
      }).toThrowError('You must at least 1 character for special');

      expect(() => {
         generateRandomPassword({
            firstCharType: 'number',
            upperCaseCharacters: '',
            lowerCaseCharacters: '',
            specialCharacters: '',
            numberCharacters: '',
         });
      }).toThrowError('You must at least 1 character for number');
   });
});
