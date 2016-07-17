function sum(digit) {
  if (this.storage === undefined) {
    this.storage = 0;
  }
  if (digit !== undefined) {
    this.storage = storage + digit;
    return sum;
  } else {
    var result = this.storage;
    this.storage = 0;
    return result;
  }
}
