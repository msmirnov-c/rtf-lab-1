/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    str = new String();
    strNumber = new String();
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 'number') {
            return null;
        }

        str = array[i].toString();
        strNumber = strNumber + str;

    }
    str = parseInt(strNumber, 10);
    str = str + number;
    array = new array();
    array = array.concat(str.split(''));
    return array;
}
module.exports = { addNumber };




