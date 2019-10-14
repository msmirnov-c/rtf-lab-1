/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    array.forEach((item) => {
        if (typeof (item) !== 'number') return null;

        if ((item.toString()).length === 1) {
            return 0;
        }

        return null;
    });
    let finalNumber;
    for (let i = 0; i < array.length; i++) {
        finalNumber = finalNumber * 10 + array[i];
    }

    finalNumber += number;
    const finalArr = [];
    for (let i = (finalNumber.toString()).length; i > 0; i--) {
        finalArr[i] = finalNumber % 10;
    }

    return finalArr;
}

module.exports = {
    addNumber,
};
