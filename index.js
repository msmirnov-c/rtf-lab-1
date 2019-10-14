/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    function isTrue(numeric) {
        return numeric >= 0 && numeric <= 9 && typeof numeric === 'number';
    }

    if (array.every(isTrue)) {
        let newNumber = Number(array.join(''));
        newNumber += number;

        return newNumber.toString.split('').map(string => parseInt(string, 10));
    }

    return null;
}

module.exports = {
    addNumber,
};
