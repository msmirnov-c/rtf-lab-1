/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
addNumber([1, 0, 9], 2);
function addNumber(array, number) {
    let num = '';
    if (array.length < 1) return null;
    
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== 'number'&& array[i] > 9 && array[i] < 0) {return null;}
    }

    for (let i = 0; i < array.length; i++) {
        num += array[i];
    }

    let number1 = parseInt(num, number);
    number1 = number + number1;
    const arr = [];
    while (number1 > 0) {
        arr.unshift(number1 % 10);
        number1 = Math.floor(number1 / 10);
    }
    return arr;
}

module.exports = {
    addNumber,
};
