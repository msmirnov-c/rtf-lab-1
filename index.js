/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    let strArr = '';

    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== 'number' || array[i] < 0 || array[i] > 9) {
            return null;
        }
    }

    for (let i = 0; i < array.length; i++) {
        strArr += array[i].toString();
    }

    strArr = parseInt(strArr, 10) + number;

    return strArr.toString().split('').map(Number);
}

module.exports = {
    addNumber,

};
