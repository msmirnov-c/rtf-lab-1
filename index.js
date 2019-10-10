/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number)
{
    let resultSum = '';
    let strArray = '';
    for (let i = 0; i < array.length; i++)
    {
        if (Number.isInteger(array[i]) && array[i].toString().length===1)
        {
            strArray += array[i].toString();
        }
        else return null;
    }
    resultSum = Number(strArray) + number;
    resultSum.toString();
    return resultSum.split('').map(value=> parseInt(value));;
}

module.exports = {
    addNumber
};