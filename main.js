function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function caesarCipher(string, shift) {
  return string
    .split('')
    .map((char) => {
      if (char.match(/[a-z]/)) {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 97 + shift) % 26) + 97
        );
      } else if (char.match(/[A-Z]/)) {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 65 + shift) % 26) + 65
        );
      }
      return char;
    })
    .join('');
}

function analyzeArray(array) {
  return {
    average: array.reduce((a, b) => a + b) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
