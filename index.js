/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let NewMass = [];
    let NewNum = 0;
    if(array.some(item => isNaN(item) || item === null || item > 9 || item < 0)){//Проверка на подходящие числа
        for(let e in array) 
            if (array[e] === null || array[e] > 9 || array[e] < 0 ) return null; 
        NewNum = array.join();
        NewNum = NewNum + number;
        NewMass = NewNum.toString(10).split('').map(Number); 
        return NewMass;
    }
    else return null;
}
module.exports = {
    addNumber
};