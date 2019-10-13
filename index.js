/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const checkNumbers = array.every((i) => Number.isInteger(i));

    if (!checkNumbers) return null;

    const num = parseInt(array.join(''), 10);
    const numberStr = (num + number).toString();

    const arr = [];

    for (let i = 0; i < numberStr.length; i++) {
        arr[i] = parseInt(numberStr[i], 10);
    }

    return arr;
}

module.exports = {
    addNumber,
};
