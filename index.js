/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 || array[i] > 9 || parseInt(array[i], 10) === array[i]) {
            return null;
        }

        if (number < 0 || !Number.isInteger(number)) {
            return null;
        }

        let arr = parseInt(array.toString().replace(/,/gm, ''), 10);

        let result = arr + number;

        return Array.from(String(result), Number);
    }
}

module.exports = {
    addNumber,
};
