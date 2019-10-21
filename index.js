/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!Number.isInteger(number) || number < 0) {
        return null;
    }

    if (array.some((item) => !Number.isInteger(item) || item < 0 || item > 9)) {
        return null;
    }

    let str = '';
    array.forEach((item, index, array) => {
        str += item.toString();
    });

    return (parseInt(str, 10) + number).toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
