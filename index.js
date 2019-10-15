/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    if (array.some(check)) {
        return null;
        Number(array.reduse((sum, current) => sum + current.toString()) + number);
    };

    function check(elem, array) {
        elem = array[i];
        return elem !== 'number';
    }

}
module.exports = { addNumber };
