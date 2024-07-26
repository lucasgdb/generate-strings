import { getRandomInteger } from "../getRandomInteger";

describe("getRandomInteger", () => {
  it("should generate random number between 1 and 5", () => {
    const randomInteger = getRandomInteger(1, 5);

    expect(randomInteger).toBeGreaterThanOrEqual(1);
    expect(randomInteger).toBeLessThanOrEqual(5);
  });

  it("should generate random number between -5 and 5", () => {
    const randomInteger = getRandomInteger(-5, 5);

    expect(randomInteger).toBeGreaterThanOrEqual(-5);
    expect(randomInteger).toBeLessThanOrEqual(5);
  });
});
