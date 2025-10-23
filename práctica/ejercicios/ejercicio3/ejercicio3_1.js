function yourFunction(arr) {
  const ext = arr[arr.length - 1];
  const file = arr[arr.length - 2];
  const dirs = arr.slice(0, -2);
  return [...dirs, `${file}.${ext}`].join('/');
}

module.exports = yourFunction;