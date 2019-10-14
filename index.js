/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    str = new String();
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 || array[i] > 9 || typeof array[i] !== 'number') {
            return null;
        }
        array.map(array[i].toString());
       str = str + array[i];
    }
    const str = parseInt(str, 10);
    const sum = str + number;
    const final = array.concat(sum.split(''));
    return final;
}
module.exports = { addNumber };

   
    

   