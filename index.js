/**
 * * @param array – массив элементов. Например, [1, 8, 3]
* @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let num = '';

    if (array.length < 1) return null;

    if (array.some((item) => typeof (item) !== 'number' || item > 9 || item < 0)) return null;

    num = array.reduce((accumulator, item) => accumulator + item, '');

    let newNumber = parseInt(num, 10) + number;

    const arr = [];

    if (newNumber === 0) {
        arr[0] = 0;
        return arr;
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
