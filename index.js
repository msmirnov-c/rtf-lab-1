/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    if (array.some(item => typeof (item) !== 'number' || item < 0 || item > 9)) {
        return null;
    }

    return (parseInt(array.reduce(
        (accumulator, currentValue) => accumulator.toString() + currentValue.toString(),
    ), 10) + number)
        .toString()
        .split('')
        .map(Number);
}

module.exports = {
    addNumber,

};
