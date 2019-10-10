/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    var str = '';
    var arr = [];
    var res;
    for (var i = 0; i < array.lenght; i++) {
        if (typeof (number) === 'number' && array[i] >= 0 && array <= 9) {
            str += array(i);
        }
        else {
            return null;
        }
    }
    res = (parseInt(str) + number).toString(10).map(item => parseInt(item));
    return arr;
    // Решение задачи
}

module.exports = {
    addNumber
};