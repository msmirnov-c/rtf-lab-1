/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    let result = [];
    let sum = 0;
    if (array.length === 0) {
        return null;
    }

    if (!array.every((item) => typeof (item) === 'number' && item >= 0 && item <= 9)) {
        return null;
    }

    if (number < 0 || !Number.isInteger(number)) {
        return null;
    }

    let j = 0;
    for (let i = array.length - 1; i >= 0; i--, j++) {
        sum += array[i] * (10 ** j);
    }

    sum += number;

    if (sum === 0) {
        result = [0];
    }

    let count = 0;
    while (sum >= 1) {
        result[count] = sum % 10;
        sum -= sum % 10;
        sum /= 10;
        count++;
    }

    return result.reverse();
}

module.exports = {
    addNumber,
};
