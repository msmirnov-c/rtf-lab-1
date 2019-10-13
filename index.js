/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let resultNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])
            && Array.isArray(array)
            && array[i] <= 9
            && array[i] >= 0
            && number >= 0
            && Number.isInteger(number)
            && array.length > 0) {
            resultNumber += array[i] * (10 ** array.length - i - 1);
        } else return null;
    }

    resultNumber += number;

    return resultNumber.toString().split('').map((i) => Number(i));
}

module.exports = {
    addNumber,
};
