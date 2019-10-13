/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    function check(value) {
        let result = true;
        if (value < 0 || value > 9 || typeof value !== 'number') {
            result = false;
        }
        return result;
    }
    if (!array.every(check)) {
        return null;
    }
    return (parseInt(array.join(''), 10) + number).toString().split('').map(Number);
}

module.exports = {
    addNumber
};
