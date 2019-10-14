/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const allElementsAreNumbers = array.every((item) => typeof (item) === 'number');
    if (allElementsAreNumbers && array.length !== 0) {
        const origNum = parseInt(array.join(''), 10) + number;
        const numStr = origNum.toString();
        const stringArr = numStr.split('');
        const resultArr = stringArr.map((item) => parseInt((item), 10));
        return resultArr;
    }
    return null;
}

module.exports = {
    addNumber,
};
