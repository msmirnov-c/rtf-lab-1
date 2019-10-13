/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let resultNumber = 0;
    if (array.prototype.every(element => element >= 0
    && element < 9
    && Number.isInteger(element)) && number >= 0 && Number.isInteger(number)) return null;

    resultNumber = parseInt(array.join(''), 10);

    resultNumber += number;

    return resultNumber.toString().split('').map((i) => Number(i));
}

module.exports = {
    addNumber,
};
