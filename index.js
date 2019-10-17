/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    let arrayAsNumber = 0;
    const finalArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!(typeof (array[i]) === 'number') || !(array[i] >= 0) || !(array[i] <= 9)) {
            return null;
        }

        arrayAsNumber = arrayAsNumber * 10 + array[i];
    }

    arrayAsNumber += number;

    for (let i = arrayAsNumber.toString().length; i > 0; i--) {
        finalArr.unshift(arrayAsNumber % 10);
        arrayAsNumber = Math.trunc(arrayAsNumber / 10);
    }

    return finalArr;
}

module.exports = {
    addNumber,
};
