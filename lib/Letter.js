class Letter {
  constructor(character) {
    this.char = character;
    this.visible = !/[a-z0-9]/i.test(this.char);
  }

  toString() {
    return this.visible ? this.char : "_";
  }

  guess(char) {
    return this.char.toLowerCase() === char.toLowerCase();
  }

  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
