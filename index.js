/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const final = array.every((item) => typeof (item) === 'number');
    if (!final || array.length === 0) {
        return null;
    }

    const numberFinal = number + parseInt(array.join(''), 10);

    return numberFinal.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
