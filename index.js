/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const checkArr = array.every(item => typeof item === 'number');
    if (checkArr) {
        let resultArr = [];
        if (array.length === 0) {
            resultArr.push(number);

            return resultArr;
        }

        let origNum = parseInt(array.join(''), 10);
        origNum += number;
        const numStr = origNum.toString();
        resultArr = numStr.split('');
        resultArr = resultArr.map(item => parseInt(item, 10));

        return resultArr;
    }

    return null;
}

module.exports = {
    addNumber,
};
