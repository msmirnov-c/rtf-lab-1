/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let stringForAddNumber;
    if (array.some(elem => isNaN(elem) || elem > 9  || elem < 0 || elem === null || Math.floor(elem) !== elem))
        return null;
    array.join('');
    stringForAddNumber = parseInt(array.join('')) + number;
    return stringForAddNumber.toString().split('').map(Number);
}
module.exports = {
    addNumber
};