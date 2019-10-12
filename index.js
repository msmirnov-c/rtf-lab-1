/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (typeof array != 'object' && typeof number != 'number') return null;
    let in_num = "";
    array.forEach(function (arr) {
        if (typeof arr == 'number');
        else { in_num = 'exit'; return null; }
        if (arr < 0 || arr > 9) { in_num = 'exit'; return null; }
        else in_num += arr;
    });
    return in_num == 'exit' ? null : Array.from((Number(in_num) + number) + '').map(arr => [Number(arr)]);
}

module.exports = {
    addNumber
};
