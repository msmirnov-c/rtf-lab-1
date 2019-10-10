/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number){
    let NewMass = [];
    let NewNum = '';
    for(var i = 0; i<array.lenght; i++)
    {
        if(Math.trunc(array[i]) === array[i] && typeof(array[i]) === 'number' && array[i]>=0 && typeof(array[i])<=9)
            NewNum += array[i];
    
        else return null;
    }
    const LastNum = parseInt(NewNum) + number;
    //NewMass = NewNum.split().map(Number); 
    //NewNum = NewNum.toString(10);
    return NewMass.split().map(LastNum);
}
module.exports = {
    addNumber
};