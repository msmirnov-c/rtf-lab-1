function addNumber(array, number) {
    if (array.some((item) => typeof (item) !== 'number' || item !== Math.trunc(item) || item < 0 || item > 9)) {
        return null;
    }

    let sumString = '';
    sumString = parseInt(array.reduce((sumString, current) => sumString + current.toString()), 10);
    sumString += number;

    return sumString.toString(10).split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
