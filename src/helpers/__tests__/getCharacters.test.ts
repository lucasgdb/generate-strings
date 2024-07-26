import { type getCharactersProps, getCharacters } from "../getCharacters";

describe("getCharacters", () => {
  test("getCharacters without props", () => {
    const possibleCharacters = getCharacters();

    expect(possibleCharacters).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
  });

  test("getCharacters with inverted characters", () => {
    const config: getCharactersProps = {
      upperCase: false,
      lowerCase: false,
      special: true,
      number: false,
    };

    const possibleCharacters = getCharacters(config);

    expect(possibleCharacters).toBe("!@#$%&*()=[]{}");
  });

  test("getCharacters with changed default characters", () => {
    const config: getCharactersProps = {
      upperCaseCharacters: "ABCDEF",
      lowerCaseCharacters: "abcdef",
      numberCharacters: "012345",
    };

    const possibleCharacters = getCharacters(config);

    expect(possibleCharacters).toBe("ABCDEFabcdef012345");
  });

  it('should throw an "You must set at least 1 character type" error', () => {
    const config: getCharactersProps = {
      upperCase: false,
      lowerCase: false,
      special: false,
      number: false,
    };

    expect(() => getCharacters(config)).toThrowError("You must set at least 1 character type.");
  });
});
