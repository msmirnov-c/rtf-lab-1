/** 
* @param array  – массив элементов. Например, [1, 8, 3] 
* @param number – число, которое нужно прибавить к числу, полученному из массива 
*/ 

function addNumber(array, number) 
{ 
    var num = 0; 
    let newArray = []; 
    var typeOfElem = array.every(item => typeof item === 'number');//Проверка на тип данных 
    var integer = array.every(item => Number.isInteger(item)); 
    if (typeOfElem === true && integer === true && number > 0 && Number.isInteger(number) === true) 
    { 
        for(let i in array) 
            if (array[i] === null || array[i] > 9 || array[i] < 0 ) return null; 

        num = array.join(); 
        num = Number(num.replace(/,/g, '')); 
        num += number; 
        newArray = num.toString(10).split('').map(Number); 
    } 
    else 
        return null;// не подходит по усовию 
    return newArray;// возвращаю массив 
} 

module.exports = {
    addNumber
};