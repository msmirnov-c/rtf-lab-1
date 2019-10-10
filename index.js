/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    var str = '';
    for (var i = 0; i < array.lenght; i++) {
        if (array[i] === Math.trunc(array[i]) && typeof (number) === 'number' && typeof (array[i]) === 'number' && array[i] >= 0 && array[i] <= 9) {
            str += array[i];
        }
        else {
            return null;
        }
    }
    str = (parseInt(str) + number).toString(10);
    var arr = str.split('').map(item => parseInt(item));
    return arr;
}

module.exports = {
    addNumber
};