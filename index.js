/**
* @param array – массив элементов. Например, [1, 8, 3]
* @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!Array.isArray(array) || !Number.isInteger(number) || number < 0) { return null; }

    let stringNumber = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && Number.isInteger(array[i])) {
            stringNumber += array[i];
        } else if (typeof (array[i]) === 'string' && Number.isInteger(array[i]) || array[i] === null) {
            return null;
        }
    }

    const intNumber = parseInt(stringNumber, 10) + number;
    const res = intNumber.toString();
    const arr = [];
    if (array.length === 0) {
        arr.push(number);

        return arr;
    }

    for (let i = 0; i < res.length; i++) {
        arr.push(parseInt(res[i], 10));
    }

    return arr;
}

module.exports = {
    addNumber,
};
