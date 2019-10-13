/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let secondNumberIsNumber = isNumber(number);
    let arrayElementsIsNumber = array.every((item) => (isNumber(item)) && (item >= 0) && item <= 9);
    let amount = Number(array.join('')) + number;
    let arr = String(amount).split('').map((item) => Number(item));

    return secondNumberIsNumber && arrayElementsIsNumber ? arr : null;
}

function isNumber(number) {
    return number !== 'string';
}

module.exports = {
    addNumber,
};
