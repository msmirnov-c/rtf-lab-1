/**
* @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */

function addNumber(array, number) 
{
    let numLine = '';
    let i = 0;
    while (i < array.length) { 
    if (array[i] === Math.trunc(array[i]) && array[i] >= 0 && array[i] < 10 && (typeof(array[i]) === 'number')) { 
        numLine += array[i];
        i++
    } 
    else { 
    return null; 
    }
}
    numLine = (number + parseInt(numLine)).toString(10);
    return numLine.split('').map(item => parseInt(item));
}

module.exports = {
    addNumber
};