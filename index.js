/**
 * @param arr – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    if (array.some((item) => !Number.isInteger(item) || item < 0 || item > 9)) {
        return null;
    }

    return ((array.reverse()
        .reduce((total, current, index) => total + 10 ** index * current)) + number)
        .toString()
        .split('')
        .map(Number);
}

module.exports = {
    addNumber,
};
