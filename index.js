/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    if (!Number.isInteger(number) || number < 0) {
        return null;
    }

    if (array.some((item) => (Number.isInteger(item) && item >= 0 && item < 10))) {
        let numberString = array.join('');
        numberString = (parseInt(numberString, 10) + number).toString();
    } else {
            return null;
        }

    return numberString.split('').map(Number);
}

module.exports = {
    addNumber,
};
