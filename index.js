/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    function right(element) {
        return element < 9 && element > 0 && Number.isInteger(element);
    };
    if (!array.every(right)) {
        return null;
    }
    let sumDigit = Number(array.join('')) + number;
    let sumArray = sumDigit.toString().split('').map(Number);

    return sumArray;
}

module.exports = {
    addNumber
};
