function countVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }

  module.exports = countVowels