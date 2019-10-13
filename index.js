/** 
* @param array – массив элементов. Например, [1, 8, 3] 
* @param number – число, которое нужно прибавить к числу, полученному из массива 
*/
function addNumber(array, number) 
{
    let numLine = '';
    array.forEach(function(_item, i, array) {
        if (array[i] === Math.ceil(array[i]) && array[i] >= 0 && array[i] < 10 && (typeof(array[i]) === 'number')) {
            numLine += array[i];
        }
        else {
            return null;
        }
    }); 
    return (number + parseInt(numLine)).toString(10).split('').map(item => parseInt(item));
}

module.exports = {
    addNumber
};