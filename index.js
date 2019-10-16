/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (array.some((item) => Number.isInteger(item) === 'false' || item <= 0 || item >= 9)) return null;

    const stringFromArray = array.join('');

    if (typeof number !== 'number') return null;

    const finalNumber = parseInt(stringFromArray, 10) + number;
    const returnedArray = finalNumber.toString().split('').map(Number);

    return returnedArray;
}

module.exports = {
    addNumber,
};
