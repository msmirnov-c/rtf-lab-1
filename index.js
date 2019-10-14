/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== 'number') return null;

        if (array[i] < 0 || array[i] > 9) {
            return null;
        }

        return 0;
    }

    let finalNumber = 0;
    for (let i = 0; i < array.length; i++) {
        finalNumber = finalNumber * 10 + array[i];
    }

    finalNumber += number;
    const finalArr = [];
    for (let i = (finalNumber.toString()).length; i > 0; i--) {
        finalArr.unshift(finalNumber % 10);
        finalNumber = Math.trunc(finalNumber / 10);
    }

    return finalArr;
}

module.exports = {
    addNumber,
};
