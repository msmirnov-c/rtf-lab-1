/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (typeof array != 'object' && typeof number != 'number') return null;
    let out_nums = "";
    array.forEach(function (arr) {
        if (typeof arr == 'number');
        else { out_nums = 'exit'; return null; }
        if (arr < 0 || arr > 9) { out_nums = 'exit'; return null; }
        else out_nums += arr;
    });
    return out_nums == 'exit' ? null : Array.from((Number(out_nums) + number) + '').map(arr => [Number(arr)]);
}

module.exports = {
    addNumber
};
