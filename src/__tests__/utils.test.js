// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    expect(pointsForWord("test")).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    expect(pointsForWord("tEsT")).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    expect(pointsForWord("")).toBe(0);
  });

  it("ignores non-alphabet characters", () => {
    expect(pointsForWord("test!")).toBe(7); // Optional depending on implementation
  });

  it("returns 0 for non-string input", () => {
    expect(pointsForWord(1234)).toBe(0); // Optional, but shows robust code
  });
});
