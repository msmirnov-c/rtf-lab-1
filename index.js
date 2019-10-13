/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (!Number.isInteger(array[i])) {
            return null;
        }
    }

    const summ = Number(array.reduce((sum, current) => sum + current.toString())) + number;

    return Array.from(summ.toString(), (value => parseInt(value, 10)));
}

module.exports = {
    addNumber,
};
