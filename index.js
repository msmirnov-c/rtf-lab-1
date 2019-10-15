/**
 * * @param array – массив элементов. Например, [1, 8, 3]
* @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (array.length < 1) {
        return null;
    }

    if (array.some((item) => typeof (item) !== 'number' || item > 9 || item < 0)) return null;

    const num = array.reduce((accumulator, item) => accumulator + item, '');

    const arr = [];
    let newNumber = parseInt(num, 10) + number;

    if (newNumber === 0) {
        return [0];
    }

    while (newNumber > 0) {
        arr.unshift(newNumber % 10);
        newNumber = Math.floor(newNumber / 10);
    }

    return arr;
}

module.exports = {
    addNumber,
};
