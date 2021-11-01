function reverseString(str) {
  return str.split("").reverse().join("");
  // the string is split into an array, the array is reversed and then joined into a string
}

module.exports = reverseString;
