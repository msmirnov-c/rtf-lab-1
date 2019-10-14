/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (number > 0 && array.every((item) => item >= 0 && item < 10 && Number.isInteger(item))) {
        const myString = array.join("");
        const mySum = Number(myString) + number;
        const intToStr = String(mySum);
        const myResult = intToStr.split("").map(Number);

        return myResult;
}

module.exports = {
    addNumber,
};
//
