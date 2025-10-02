function yourFunction(str) {
    const reversed = str.split('').reverse().join('');
    return '${str.lenght} ${reversed}';
}

module.exports = yourFunction;