/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const areAllNumbers = array.every(item => typeof item === 'number');
    if (areAllNumbers) {
        const numberFromArray = array.reduce((item, currentNumber) => {
            return item + currentNumber;
        }, '');
        const numbersForNewArray = +numberFromArray + number;
        const newArray = Array.from(numbersForNewArray.toString());
        return newArray.map(item => +item);
    }
    return null;
}

module.exports = {
    addNumber
};