/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number){
    let NewMass = [];
    let NewNum = '';
    for(var i = 0; i<array.lenght; i++){
        if(array[i]  = isNaN || array[i]  == null || array[i] > 9 || array[i] < 0)    return null;
        else if(Math.trunc(array[i]) === array[i] /*&& (typeof(array[i]) === 'number')*/)
            NewNum += array[i];
    }
    NewNum = parseInt(NewNum) + number;
    //NewMass = NewNum.split().map(Number); 
    //NewNum = NewNum.toString(10);
    return NewMass.split('').map(NewNum);
}
module.exports = {
    addNumber
};