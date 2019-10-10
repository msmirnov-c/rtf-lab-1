/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    var arr;
    var res
    for (var i = 0; i < array.lenght; i++) {
        if (typeof (number) === 'number' && array[i] >= 0 && array <= 9) {
            arr += array(i);
            res = parseInt(arr) + number;
        }
        else {
            return null;
        }
    } 
    return res;
    // Решение задачи
}

module.exports = {
    addNumber
};