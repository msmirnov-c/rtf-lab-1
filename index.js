/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (!Number.isInteger(number) && array[i] < 0 && array[i] > 9 && typeof array[i] != 'number') {
            return null;
        }
    }

    let string = array.join('');
    let summ = Number(string);
    summ += number;
    let result = summ.toString().split('');

    return result.map(Number);
}

module.exports = {
    addNumber
};