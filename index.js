/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    // решение
    let newNumber = 0;
    if (array.every(number >= 0 && number <= 9 && typeof number === 'number')) {
        if (number >= 0 && Number.isInteger((number))) {
            let string = array.join('');
            newNumber = Number(string);
            newNumber += number;
            return newNumber.toString.split('').map(Number);
        }
    }
    return null;
}

module.exports = {
    addNumber
};