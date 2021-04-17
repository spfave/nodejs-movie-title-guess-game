class Letter {
  constructor(character) {
    this.char = character;
    this.visible = !/[a-z0-9]/i.test(this.char);
  }

  // Over-ride 'toString' method for class
  toString() {
    return this.visible ? this.char : "_";
  }

  guess(char) {
    if (this.char.toLowerCase() === char.toLowerCase()) {
      this.visible = true;
      return true;
    }
    return false;
    // return this.char.toLowerCase() === char.toLowerCase();
  }

  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
