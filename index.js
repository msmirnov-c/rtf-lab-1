/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number)
{
    let resultNumber = 0;
    for (let i = 0; i < array.length; i++)
    {
        if(Number.isInteger(array[i]) && array[i] <= 9 && array[i] >= 0)
            resultNumber += array[i] * Math.pow(10, array.length - i - 1);
        else return null;
    }
    resultNumber += number;
    return resultNumber.toString().split('').map(i => Number(i));
}

module.exports = {
    addNumber
};