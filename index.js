/** 
* @param array  – массив элементов. Например, [1, 8, 3] 
* @param number – число, которое нужно прибавить к числу, полученному из массива 
*/ 


function addNumber(array, number) 
{ 
    let num = 0; 
    let newArray = []; 
    var integer = array.every(item => Number.isInteger(item)); 
    if (integer === true && array.every(item => item>0 && item<9 && item !== null) ) { 
        num = array.join(); 
        num = Number(num.replace(/,/g, '')); 
        num += number; 
        newArray = num.toString(10).split('').map(Number); 
    } else 
        return null;// не подходит по усовию 
    return newArray;// возвращаю массив 
} 

module.exports = {
    addNumber
};
