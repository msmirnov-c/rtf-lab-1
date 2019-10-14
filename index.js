/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 || array[i] > 9 || typeof array[i] !== 'number') {
            return null;
        }
    }

     str = array.join('');
     strValue = parseInt(str, 10);
     sum = strValue + number;
     strSum = sum.toSting();
     array = strSum.split('');
    arr.concat(array);
    return arr;
}

module.exports = { addNumber };
