/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 || array[i] > 9 || typeof array[i] !== 'number') {
            return null;
        }
    }

    let sum = 0;
    const str = array.join('');
    const strValue = parseInt(str, 10);
    const sum = strValue + number;
    array.concat(sum.split(''));

    return array;
}

module.exports = { addNumber };
