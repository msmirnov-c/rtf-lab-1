/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.lenght; i++) {
        if (typeof array[i] !== 'number') {
            return null;
        }
    }

    let strValue = '';
    const str = array.join('');
    strValue = parseInt(str, 10);
    strValue += number;
    array.concat(strValue.splite(''));

    return array;
}

module.exports = {
    addNumber };
