/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!array.every((item) => typeof item === 'number' && item >= 0 && item <= 9) && typeof number === 'number') {
        return null;
    }

    const finalNumber = parseInt(array.join(''), 10) + number;

    return finalNumber.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
