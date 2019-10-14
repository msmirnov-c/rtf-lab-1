/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */

function addNumber(array, number) {
    if (array === null || number < 0 || number === null
        || array.some(element => element < 0 || !Number.isInteger(element) || element == null)) {
        return null;
    }

    const intResult = parseInt(array.join(''), 10) + number;
    const stringResult = intResult.toString();

    return stringResult.split('').map(element => parseInt(element, 10));
}

module.exports = {
    addNumber,
};
