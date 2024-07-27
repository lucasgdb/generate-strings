import { generateRandomString } from "../generateRandomString";

describe("generateRandomString", () => {
  it("should generate a password with 15 characters", () => {
    const randomString = generateRandomString({ stringLength: 15 });
    expect(randomString.length).toBe(15);
  });

  it('should throw "stringLength must be greater than 0" error', () => {
    const generateRandomStringCaller = (stringLength: number) => () => {
      generateRandomString({ stringLength });
    };

    expect(generateRandomStringCaller(0)).toThrowError("stringLength must be greater than 0.");

    expect(generateRandomStringCaller(-5)).toThrowError("stringLength must be greater than 0.");
  });
});
