/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let stringFromArray = 0;
    if (array.every((item) => item === 0 || item === 1 || item === 2 || item === 3
        || item === 4 || item === 5 || item === 6 || item === 7
        || item === 8 || item === 9)){
        stringFromArray = array.join('');
        }

    else return null;

    if (typeof number !== 'number') return null;
    const finalNumber = parseInt(stringFromArray, 10) + number;
    const returnedArray = finalNumber.toString().split('').map(Number);

    return returnedArray;
}

module.exports = {
    addNumber,
};
