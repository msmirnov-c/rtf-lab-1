/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const isPositiveNumber = Number.isInteger(number) && number > 0;
    const isNotEmptyArray = Array.isArray(array) && array.length > 0;
    const isOnlyNumericalDigits = array.every(x => Number.isInteger(x) && x <= 9 && x >= 0);

    if (!isPositiveNumber || !isNotEmptyArray || !isOnlyNumericalDigits) {
        return null;
    }

    const result = [];

    for (let i = 0; i < array.length || number > 0; i++) {
        if (i < array.length) {
            // eslint-disable-next-line no-param-reassign
            number += array[array.length - 1 - i];
        }

        result.unshift(number % 10);
        // eslint-disable-next-line no-param-reassign
        number = Math.trunc(number / 10);
    }

    return result;
}

module.exports = {
    addNumber,
};
