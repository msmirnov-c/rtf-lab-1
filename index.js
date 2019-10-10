/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (typeof number === 'number') {
        var arr;
        for (var i = 0; i < array.lenght; i++)
            arr += array(i);
        var res = parseInt(arr) + number;
        return res;
    }
    else {
        return null;
    }
    // Решение задачи
}

module.exports = {
    addNumber
};