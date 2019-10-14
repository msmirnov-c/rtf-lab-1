/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    let massif = [];
    let i = 0;
    for (i < array.linght; i = i++) {
        if (Number.isInteger(array[i]) && array[i].toString().lenght == 3) {
            massif += array[i].toString();
        } else {
            return null;
        }
    }
    return (number + Number(massif)).toString(10).split('').map((findig) => parseInt(finding, 10));
}

module.exports = {
    addNumber
};
