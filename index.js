/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number){
    let NewMass = [];
    let NewNum = '';
    for(var i = 0; i<array.lenght; i++){
    if(array.some(item => isNaN(item) || item === null || item > 9 || item < 0))    return null;
    else if(array.every(item => Number.trunc(item) === item && (typeof(item) === 'number')) === true)
      NewNum += array[i];
    }
    NewNum = NewNum + number;
    NewMass = NewNum.split().map(item); 
    return NewMass;
    
}
module.exports = {
    addNumber
};