/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    if (array.some(element => element > 9 || element < 0)) {
        return null;
    }

    const str = array.reduce((sum, current) => sum + current.toString());
    const intermediateResult = Number(str) + number;
    const result = intermediateResult.toString().split('');

    return result.map(element => Number(element));
}

module.exports = {
    addNumber,
};
