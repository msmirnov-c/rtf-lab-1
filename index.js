/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    for (let el of array) {
        if (!Number.isInteger(el) || el < 0 || el > 9)
            return null;
    }
    let numberStr = array[0] + '';
    let i = 1;
    while (i < array.length) {
        numberStr =  numberStr + array[i];
        i++;
    }
    numberStr = String(Number(numberStr) + number);
    let result = [];
    for (let j = 0; j < numberStr.length; j++) {
        result.push(Number(numberStr[j]));
    }
    return result;
}

module.exports = {
    addNumber
};