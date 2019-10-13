function addNumber(array, number) {
    if (array.some((item) => typeof (item) !== 'number' || item !== Math.trunc(item) || item < 0 || item > 9)) {
        return null;
    }

    let numbers = '';
    numbers = number + parseInt(array.reduce((numbers, current) => numbers + current.toString()), 10);

    return numbers.toString(10).split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
