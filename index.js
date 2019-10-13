/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let res = 0;
    if (array.length == 0 || !Number.isInteger(number)
        || !array.every((num) => Number.isInteger(num))
        || !array.every((num) => num<=9 && num>=0) ||number < 0) return null;
    for (let i = 0; i < array.length; i++) {
        res += (Math.pow(10, array.length - i - 1) * array[i]);
    }
    res += number;
    return String(res).split('').map(item =>parseInt(item));
}
module.exports = {
    addNumber,
};
