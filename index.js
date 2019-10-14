/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let final = [];
    let i = 0;
    do{
        if (array[i] === Math.ceil(array[i]) && array[i] >= 0 && array[i] < 10 && (typeof(array[i]) === 'number')) {
            final += array[i];
            i++;
        }
        else {
            return null;
        }
    }
    while (i < array.length);
    
    return (number + parseInt(final,10)).toString(10).split('').map(item => parseInt(item,10));
}
module.exports = {
    addNumber
}; 
