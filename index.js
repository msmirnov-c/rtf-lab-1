/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!Number.isInteger(number) || number < 0 ||
        !Array.isArray(array) || array.length === 0 || (array.length > 1 && array[0] === 0) ||
        !array.every((x) => Number.isInteger(x) && x <= 9 && x >= 0)) return null;

    const result = [];

    for (let i = array.length - 1; i >= 0 || number > 0; i--){
        number += i >= 0 ? array[i] : 0;
        result.unshift(number % 10);
        number = number / 10 | 0;
    }
    return result;
}

module.exports = {
    addNumber
};