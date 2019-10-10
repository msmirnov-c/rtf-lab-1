/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    if (array.some(el => (!Number.isInteger(el) || el < 0 || el > 9)))
        return null;
    let numberStr = array.join('');
    numberStr = String(Number(numberStr) + number);
    const result = numberStr.split('').map(Number);
    return result;
}

module.exports = {
    addNumber
};