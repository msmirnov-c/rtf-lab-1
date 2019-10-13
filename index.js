/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let checkNumbers = array.every(function (i) {
        return Number.isInteger(i);
    });

    if (!checkNumbers) return null;

    let num = parseInt(array.join(''));
    let numberStr = (num + number).toString();

    let arr = [];
    for (let i = 0; i < numberStr.length; i++)
        arr[i] = parseInt(numberStr[i]);

    return arr;
}

module.exports = addNumber;