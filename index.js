/**
     * @param array – массив элементов. Например, [1, 8, 3]
     * @param number – число, которое нужно прибавить к числу, полученному из массива
     */
function addNumber(array, number) {
    if (array.every((value) => Number.isInteger(value))) {
        const arrStr = parseInt(array.join(''), 10) + number;

        return arrStr.toString().split('').map(Number);
    }

    return null;
}

module.exports = {
    addNumber,
};
