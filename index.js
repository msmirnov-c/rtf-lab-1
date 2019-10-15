/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    function validation(item) {
        return (item < 0 || item > 9 || typeof item !== 'number');
    }
    if (array.some(validation)) {
        return null;
    }

    let pow = array.length - 1;
    const sum = array.reduce(function (sum, current) {
        sum += current * 10 ** pow;
        pow--;

        return sum;
    }, 0);
    const stringArray = (number + sum).toString().split('');

    return stringArray.map(Number);
}

module.exports = {
    addNumber,
};
