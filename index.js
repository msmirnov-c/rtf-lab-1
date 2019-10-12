﻿/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    if (number < 0 || !Number.isInteger(number))
    {
        return null;
    }
    if (!isCorrectArray(array) && !isCorrectNumber(number))
        return null;
    let arr = parseInt(array.toString().replace(/,/gm, ''));
    let result = arr + number;
    return Array.from(String(result), Number);
}

function isCorrectArray(array){
    for(let item of array)
    {
        if (Number(item) !== item || item > 9 || item < 0)
            return false;
    }
    return true;
}

module.exports = {
    addNumber
};