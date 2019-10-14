/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number' && array[i] < 0 && array[i] > 9) {
            return null;
        }
    }

    const string = array.join('');
    let summ = Number(string);
    summ += number;
    const result = summ.toString().split('');

    return result.map(Number);
}

module.exports = {
    addNumber,
};
