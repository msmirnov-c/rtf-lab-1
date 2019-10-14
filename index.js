/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let sum = '';
    for (let i = 0; i < array.length; i++) {
        if ((array[i].toString().length === 1) && (typeof array[i] === 'number')) {
            sum += array[i];
        } else return null;
    }

    sum = (Number(sum) + number).toString().split('');

    return Array.from(sum, x => Number(x));
}

module.exports = {
    addNumber
};