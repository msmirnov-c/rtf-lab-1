/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (array.some((item) => (typeof (item) !== 'number' || item < 0 || item > 9))) return null;

    const numberFromArray = (parseInt(array.join(''), 10) + number).toString();

    return numberFromArray.split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
