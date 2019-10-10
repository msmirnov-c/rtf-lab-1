/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let NewMass = [];
    let NewNum;
    if(array.every(item => Number.isInteger(item)));//Проверка на целочисленность
    NewNum = array.join();
    NewNum = NewNum + number;

    while (NewNum>0){
        NewMass.push(NewNum % 10);
        NewNum = NewNum - (NewNum % 10);
    }
    return NewMass;
}
module.exports = {
    addNumber
};