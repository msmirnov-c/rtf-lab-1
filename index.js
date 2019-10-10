/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (typeof array != 'object' && typeof number != 'number') return null;
    let in_num = '';
    let array_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    array.forEach(function (arr) {
        if (typeof arr == 'number');
        else { in_num = 'exit'; return null; }
        if (arr == array_numbers[0] || arr == array_numbers[1] || arr == array_numbers[2] ||
            arr == array_numbers[3] || arr == array_numbers[4] || arr == array_numbers[5] ||
            arr == array_numbers[6] || arr == array_numbers[7] || arr == array_numbers[8] ||
            arr == array_numbers[9]);
        else { in_num = 'exit'; return null; }
        in_num += arr;
    });
    return in_num == 'exit' ? null : Array.from((Number(in_num) + number) + '');
}

module.exports = {
    addNumber
};
