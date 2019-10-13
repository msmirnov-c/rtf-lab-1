/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let resultNumber = 0;
    if (!Number.isInteger(array[i])
        || !Array.isArray(array)
        || array[i] > 9
        || array[i] < 0
        || number < 0
        || !Number.isInteger(number)) return null;

    resultNumber = parseInt(array.toString().replace(/,/gi, ''))

    resultNumber += number;

    return resultNumber.toString().split('').map((i) => Number(i));
}

module.exports = {
    addNumber,
};
