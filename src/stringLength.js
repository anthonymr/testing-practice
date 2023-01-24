function stringLength(str) {
  if (str.length < 1) {
    throw new Error('String to short.');
  }
  if (str.length > 10) {
    throw new Error('String to long.');
  }
  return str.length;
}

module.exports = stringLength;