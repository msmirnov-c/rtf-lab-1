function addNumber(array, number) {
    let stringOfNumbers = '';
    if (array.some(item => ((typeof(item) != 'number') || (item != Math.trunc(item)) || (item < 0) || (item > 9)))) {
        return null;
    } else {
        array.every(item => stringOfNumbers += item);
    }
    stringOfNumbers = (parseInt(stringOfNumbers) + number).toString(10);
    return stringOfNumbers.split('').map(item => parseInt(item));
}

module.exports = {
    addNumber
};