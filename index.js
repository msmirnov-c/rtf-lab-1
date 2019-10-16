/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (!(typeof (array[i]) === 'number') && !(array[i] >= 0) && !(array[i] <= 9)) {
            return null;
        }
    }

    const result = (parseInt(array.join(''), 10) + number).toString();

    return result.split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
