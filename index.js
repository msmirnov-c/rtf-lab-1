/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    let finalNumber = 0;
    const finalArr = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === 'number' && array[i] >= 0 && array[i] <= 9) {
            finalNumber = finalNumber * 10 + array[i];
        }

        finalNumber += number;
    }

    for (let i = (finalNumber.toString()).length; i > 0; i--) {
        finalArr.unshift(finalNumber % 10);
        finalNumber = Math.trunc(finalNumber / 10);
    }

    return finalArr;
}

module.exports = {
    addNumber,
};
