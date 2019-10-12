/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) { 
    if (!Array.isArray(array) || !Number.isInteger(number) || number < 0)
        return null;

    let stringNumber = '';
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] > 0 && Number.isInteger(array[i]))
            stringNumber += array[i];
        else if (typeof(array[i]) === "string")
            return null;
    }

    let intNumber = parseInt(stringNumber) + number;
    let res = intNumber.toString();
    let arr = [];
    if (array.length == 0)
    {
        arr.push(number);
        return arr;
    }

    for (let i = 0; i < res.length; i++)
        arr.push(parseInt(res[i]));

    return arr;
}

module.exports = {
    addNumber
}