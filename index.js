/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    for (let i = 0; i < array.lentgh; i++) {
        if (array === null || number < 0 || number === null || array[i] > 9 || array[i] < 0 || typeof array[i] !== 'number') {
            return null;
        }
    }

    const str = parseInt(array.join(''), 10) + number;
    const strRes = str.toString().split('').map(Number);

    return strRes;
}

module.exports = { addNumber };
