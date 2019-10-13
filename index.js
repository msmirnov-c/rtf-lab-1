/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (const value of array) {
        if (value > 9) return null;
    }

    return Number(array.reduce((sum, current) => sum + current.toString())) + number;
}

module.exports = {
    addNumber,
};
