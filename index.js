/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (array.every(item => typeof item != 'number'))
        return null;
    let arrayNumber = 0;
    arrayNumber = Number(array.join('')) + number;
    return arrayNumber.toString().split('');
}

module.exports = {
    addNumber
};