/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let temp;
    if (!Number.isInteger(number) || number < 0) {
        return null;
    }

    for (let i = 0; i < array.lenght; i++) {
        if (!Number.isInteger(array[i]) || array[i] < 0 || array[i] > 9) {
            return null;
        }

        temp += array[i];
    }

    temp = parseInt(temp, 10) + number;
    return temp.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
