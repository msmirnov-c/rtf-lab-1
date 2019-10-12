/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if(!(array.every(item => typeof item === 'number') && item>0 && item <9))
    return null
    
    var CisloMassiva = array.join('');
    var Sum = Number(CisloMassiva) + number;
    var Sum = String(Sum);
    Sum = Sum.split('');
    Sum = Sum.map(item => Number(item));
    return SUM

module.exports = {
    addNumber
}; 
};