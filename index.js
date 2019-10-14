/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    // Решение задачи
    const newArray = [];
    let helper = 0;
    let helperNum = 0;
    if (number > 0 && Number.isInteger(number) === true) {
        for (let i = 0; i < array.length; i++) {
            if (typeof (array[i]) === 'number') {
                helper++;
            } else {
                return null;
            }
        }
    } else {
        return null;
    }

    if (helper === array.length) {
        for (let i = 0; i < array.length; i++) {
            helperNum += array[i] * (10 ** i);
        }
    }

    helperNum += number;
    let x = helperNum;
    let helperCount = 0;
    while (x > 0) {
        x /= 10;
        helperCount++;
    }

    for (let i = helperCount - 1; i >= 0; i--) {
        helperNum %= 10;
        newArray[i] = helperNum;
    }

    return newArray;
    // Решение задачи
}

module.exports = {
    addNumber,
};
