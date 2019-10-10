function addNumber(array, number) {
    let stringOfNumbers = '';
    if (array.every(item => (typeof(item) === 'number' && item === Math.trunc(item) && item >= 0 && item <= 9)))
    {
        array.every(item => stringOfNumbers += item);
    } else {
    return null;
}
    stringOfNumbers = (parseInt(stringOfNumbers) + number).toString(10);
    return stringOfNumbers.split('').map(item => parseInt(item));
}

module.exports = {
    addNumber
};