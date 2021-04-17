const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word.split("").map((char) => new Letter(char));
  }

  getSolution() {
    return this.letters.map((letter) => letter.getSolution()).join("");
  }

  toString() {
    return this.letters.join(" "); // will auto call letter.toString()
  }

  guessLetter(char) {
    return this.letters.filter((letter) => letter.guess(char)).length > 0;

    // for (const letter of this.letters) {
    //   if (letter.guess(char)) return true;
    // }
    // return false;
  }

  guessedCorrectly() {
    return this.letters.every((letter) => letter.visible);
  }
}

module.exports = Word;
