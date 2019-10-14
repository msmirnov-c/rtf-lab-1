/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let stringArray;
    for (let i = 0; i < array.lenght; i++) {
        if (typeof (array[i]) === 'number' && array[i] >= 0 && array[i] <= 9) {
            stringArray += array[i].toString();
        } else {
            return null;
        }

        const result = stringArray + number;

        return result.split('').map(Number);
    }
}

module.exports = {
    addNumber,
};
