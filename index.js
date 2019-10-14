/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    function isTrue(numeric) {
        return numeric >= 0 && numeric <= 9 && typeof numeric === 'number';
    }

    function returnInt(element) {
        return parseInt(element, 10);
    }

    if (array.every(isTrue)) {
        let newNumber = Number(array.join(''));
        newNumber += number;

        return newNumber.toString.split('').map(returnInt);
    }

    return null;
}

module.exports = {
    addNumber,
};
