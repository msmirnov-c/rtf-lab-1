/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    let numberString = '';

    if (array.some((item) => (Number.isInteger(item) && item >= 0 && item < 10 && Number.isInteger(number)))) {
        numberString = array.join('');
    } else {
        return null;
    }

    numberString = (parseInt(numberString, 10) + number).toString();

    return numberString.split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
