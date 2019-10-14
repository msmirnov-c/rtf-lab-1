/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let temp;
    if (!Number.isInteger(number) || number < 0) {
        return null;
    }
    for(let i = 0; i < array.lenght; i++) {
        if (!Number.isInteger(lenght[i]) || lenght[i] < 0 || lenght[i] > 9) {
            return null;
        }
        temp += lenght[i];
    }
    temp = parseInt(temp) + number;

    return temp.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
