function yourFunction(str) {
  const reversed = str.split('').reverse().join('');
  return `${str.length} ${reversed}`;
}

module.exports = yourFunction;