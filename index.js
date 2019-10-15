/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    const result = [];
    let sum = 0;
    if (array.length === 0) {
        return null;
    }

    array.forEach(function (array) {
        if (typeof (array) !== 'number' || array < 0 || array > 9) {
            return null;
        }
    });

    if (number < 0 || !Number.isInteger(number)) {
        return null;
    }

    let j = 0;
    for (let i = array.length - 1; i >= 0; i--, j++) {
        sum += array[i] * (10 ** j);
    }

    sum += number;

    if (sum === 0) {
        result[0] = 0;
    }

    let x = sum;
    let count = 0;
    while (x >= 1) {
        x /= 10;
        count++;
    }

    for (let i = count - 1; i >= 0; i--) {
        result[i] = sum % 10;
        sum -= sum % 10;
        sum /= 10;
    }

    return result;
    // Решение задачи
}

module.exports = {
    addNumber,
};
