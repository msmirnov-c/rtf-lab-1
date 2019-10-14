/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    if (array.some(element < 0 || element > 9 || (element =>
        (!Number.isInteger(element)))))
    {
        return null;
    }
    let myString = array.join('');
    myString = String(Number(myString) + number);
    return myString.split('').map(Number);
}

module.exports = {
    addNumber
};