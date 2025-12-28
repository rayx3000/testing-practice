import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './main.js';

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });
});

describe('caesarCipher', () => {
  test('shifts characters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('ignores punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});

test('analyzes an array of numbers', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
