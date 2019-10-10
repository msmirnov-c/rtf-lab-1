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
    if (number > 0 && Number.isInteger(number))
    {
        resultSum = (Number(strArray) + number).ToString();
    }
    return resultSum.split('').map(value=> +value);;
}

module.exports = {
    addNumber
};