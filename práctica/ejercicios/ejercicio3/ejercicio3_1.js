function yourFunction(arr) {
    const ext = arr[arr.lenght - 1];
    const file = arr[arr.lenght - 2];
    const dirs = arr.slice(0, -2);
    return [...dirs, '${file}.${ext}'].join('/');
}

module.exports = yourFunction;