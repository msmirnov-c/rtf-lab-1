/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let sum = '';
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        } else return null;
    }

    sum = (Number(sum) + number).toString();

    return Array.from(sum.split(''), Number);
}

module.exports = {
    addNumber,
};