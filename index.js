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

     const str = array.join('');
     const strValue = parseInt(str, 10);
     const sum = strValue + number;
     const strSum = sum.toSting();
     const array = strSum.split('');
     let arrEnd = [array.length];
     return arrEnd.concat(array);

}

module.exports = { addNumber };
