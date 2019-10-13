/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
// Решение задачи
    const isCorrect = (element) => typeof element === 'number' && element >= 0 && element <= 9;

    if (!array.every(isCorrect) || number < 0 || !Number.isInteger(number)) {
        return null;
    }

    let arrayNumber = 0;

    for (let i = 0; i < array.length; i++) {
        arrayNumber += array[i] * 10 ** (array.length - i - 1);
    }

    arrayNumber += number;

    return arrayNumber.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
