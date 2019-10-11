/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */

function addNumber(array, number) {
    let str = '';
    if (typeof number === 'number') {
        if (array.some(i => i === Math.trunc(i) && typeof (i) === 'number' && i >= 0 && i <= 9)) {
            array.every(i => str += i);
        } else {
            return null;
        }
    } else {
        return null;
    }
    str = parseInt(str) + number;
    return str.toString(10).split('').map(Number);
}

module.exports = {
    addNumber
};