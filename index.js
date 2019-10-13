/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    return (number !== 'string')
            && array.every(item => (typeof (item) === 'number'
            && (item >= 0)
            && (item <= 9))) ? String(Number(array.join('')) + number).split('') : null;
}

module.exports = {
    addNumber,
};
