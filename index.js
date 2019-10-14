/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    const isArrayElementsNumber = array.every((item) => (typeof item === 'number') && (item >= 0) && (item <= 9));
    const IsSecondParameterNumber = typeof number === 'number';
    if (isArrayElementsNumber && IsSecondParameterNumber) {
        const amount = Number(array.join('')) + number;

        return String(amount).split('').map((item) => Number(item));
    }

    return null;
}

module.exports = {
    addNumber,
};
