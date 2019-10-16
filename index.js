/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (array.some((item) => Number.isInteger(item) === 'false' || item <= 0 || item >= 10)) return null;

    let unifiedArray = 0;
    unifiedArray = array.join('');

    if (typeof number !== 'number') return null;

    const finalNumber = parseInt(unifiedArray, 10) + number;
    const returnedArray = finalNumber.toString().split('').map(Number);

    return returnedArray;
}

module.exports = {
    addNumber,
};
