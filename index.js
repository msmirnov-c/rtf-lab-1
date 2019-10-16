/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    let res = 0;
    if (array.length === 0 || !Number.isInteger(number) || number < 0
        || !array.every((num) => Number.isInteger(num) || (num <= 9 && num >= 0))) {
        return null;
    }

    res = array.reduce((sum, item, index) => {
        return sum + (10 ** (array.length - index - 1)) * array[index];
    }, number);

    return String(res).split('').map((item) => parseInt(item, 10));
}
module.exports = {
    addNumber,
};
