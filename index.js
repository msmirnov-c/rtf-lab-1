/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    if (array.every((item) => Number.isInteger(item))) {
        const str = array.join('');
        const sum = +str + number;
        const arrOfString = sum.toString().split('');
        const arrOfNumbers = arrOfString.map((item) => (parseInt(item)), 10);

        return arrOfNumbers;
    }

    return null;
}

module.exports = {
    addNumber,
};