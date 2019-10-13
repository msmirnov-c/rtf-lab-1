/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {    
    let len = array.length - 1;
    let num = 0;    
    if (array.length < 1) return null;    
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i] !=='number' && array[i] > 9 && array[i] < 0))  return null;    
    }    
    for (let i = array.length; i >= 1; i--){
        num += Math.pow(10, len);
        len --;
    }    
    let number1 = number + num;    
    const arr = [];
    while (number1>0){
        arr.unshift(number1%10);
        number1= Math.floor(number1/10);
    }
    }
    
    module.exports = {
    
        addNumber
    
    };