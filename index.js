/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */

function addNumber(array, number) {
    let str = '';
    if (!(typeof (number) === 'number' && array.some(i => i === Math.trunc(i) && typeof (i) === 'number' && i >= 0 && i <= 9))) {
        return null;
    } else {
        array.every(i => str += i);
    }
    str = (parseInt(str) + number).toString(10);
    return str.split('').map(Number);
}

module.exports = {
    addNumber
};