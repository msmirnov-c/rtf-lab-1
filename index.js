/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 || array[i] > 9 || typeof array[i] !== "number") {
            return null;
        }

        const stringNumber = array.join("");
        const numberFromString = parseInt(stringNumber, 10);
        const newNumber = numberFromString + number;
        const str = newNumber.toString();
        const arr = str.split("");

        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i], 10);
        }

        return arr;
    }
module.exports = { addNumber };

