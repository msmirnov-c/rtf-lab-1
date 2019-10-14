/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let result = 0;
    if (!(typeof (number) === 'number' && number >= 0 && array.length > 0)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        if (!(typeof (array[i]) === 'number' && array[i] >= 0 && array[i] <= 9)) {
            return null;
        }

        result += array[i] * (10 ** (array.length - i - 1));
    }

    result += number;
    const resultString = result.toString();
    const resultArray = [];
    for (let i = 0; i < resultString.length; i++) {
        resultArray.push(+resultString[i]);
    }

    return resultArray;
}

module.exports = {
    addNumber,
};
