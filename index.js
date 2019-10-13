/**
* @param array – массив элементов. Например, [1, 8, 3]
* @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!Array.isArray(array) || !Number.isInteger(number) || number < 0) {
        return null;
    }

    const arr = [];
    if (array.length === 0) {
        arr.push(number);

        return arr;
    }

    let stringNumber = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 && Number.isInteger(array[i]) && typeof (array[i]) !== 'string' && array[i] != null) {
            stringNumber += array[i];
        } else {
            return null;
        }
    }

    const intNumber = parseInt(stringNumber, 10) + number;
    const res = intNumber.toString();

    for (let i = 0; i < res.length; i++) {
        arr.push(res[i]);
    }

    const result = arr.map((item) => parseInt(item, 10));

    return result;
}

module.exports = {
    addNumber,
};
