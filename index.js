/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (typeof array !== 'object' || typeof number !== 'number'
        || !array.every((item) => Number.isInteger(item) || (item < 0 && item > 9))) {
        return null;
    }

    let outNums = '';
    outNums = array.reduce((sum, item) => sum + item, 0);

    const outArray = Array.from(String(Number(outNums) + number));

    return outArray.map((el) => Number(el));
}

module.exports = {
    addNumber,
};
