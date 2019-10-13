function addNumber(array, number) {
    let failFlag = false;
    if (array.some((item) => typeof (item) !== 'number' || item !== Math.trunc(item) || item < 0 || item > 9)) {
        failFlag = true;
    }

    if (failFlag === true) {
        return null;
    }

    let StringOfNumbers = number;
    StringOfNumbers += parseInt(array.reduce((total, current) => total + current.toString()), 10);
    return StringOfNumbers.toString(10).split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
