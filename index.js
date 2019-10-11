/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = 0;
    let resArr = [];
    if (array.length == 0 || ! Number.isInteger(number)|| number < 0) return null;
    for (let i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) == -1) return null;
        res += (Math.pow(10, array.length - i - 1) * array[i]);
    }
    res += number;
    return String(res).split('').map(item =>parseInt(item));
}
module.exports = {
    addNumber
};
