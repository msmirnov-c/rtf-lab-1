/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!(typeof (number) === 'number' && number >= 0 && array.length > 0)) {
        return null;
    }

    if (!array.every((elem) => typeof (elem) === 'number' && elem >= 0 && elem <= 9)) {
        return null;
    }

    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i] * (10 ** (array.length - i - 1));
    }

    result += number;

    return result.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
