function addNumber(array, number) {
    if (array.some((item) => typeof (item) !== 'number' || item !== Math.trunc(item) || item < 0 || item > 9)) {
        return null;
    }

    sumString = parseInt(array.reduce((total, current) => total + current.toString(), ''), 10);
    sumString += number;

    return sumString.toString(10).split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
