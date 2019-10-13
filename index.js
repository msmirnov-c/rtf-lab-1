/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    if(array.every(item => Number.isInteger(item)))
    {
        let str = array.join('');
        //console.log(typeof (str));
        let sum = +str + number + '';
        //console.log(typeof (sum));
        let a = sum.split('');
        let b = a.map(item => parseInt(item));
        return b;
    }else
        return null;
}

module.exports = {
    addNumber
};