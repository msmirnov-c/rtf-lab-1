//console.log(addNumber([5,'qwerfs',7],100))
/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number){
    let NewMass = [];
    let NewNum = 0;
    if(array.some(item => isNaN(item) || item === 'undefined' || item === null || item > 9 || item < 0 || Math.trunc(item) != item || typeof(item) !== 'number' || Number.isInteger(item) === false)) return null;//Проверка на подходящие числа
    NewNum = parseInt(array.join(''));
    NewNum = NewNum + number;
    NewMass = NewNum.toString(10).split().map(Number); 
    return NewMass;
}
module.exports = {
    addNumber
};