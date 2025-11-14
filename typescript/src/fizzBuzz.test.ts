import { describe, it, expect } from "vitest";
import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
  it("1を渡すと'1'を返す", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("2を渡すと'2'を返す", () => {
    expect(fizzBuzz(2)).toBe("2");
  });

  it("3を渡すと'Fizz'を返す", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("4を渡すと'4'を返す", () => {
    expect(fizzBuzz(4)).toBe("4");
  });

  it("5を渡すと'Buzz'を返す", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("6を渡すと'Fizz'を返す", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("9を渡すと'Fizz'を返す", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("10を渡すと'Buzz'を返す", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("15を渡すと'FizzBuzz'を返す", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("30を渡すと'FizzBuzz'を返す", () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it("45を渡すと'FizzBuzz'を返す", () => {
    expect(fizzBuzz(45)).toBe("FizzBuzz");
  });

  it("100を渡すと'Buzz'を返す", () => {
    expect(fizzBuzz(100)).toBe("Buzz");
  });
});
