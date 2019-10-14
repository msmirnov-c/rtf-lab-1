/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    let result = 0;
    if (!(typeof (number) === 'number' && number > 0))
        return null;

    for (let i = array.length -1; i >= 0; i--) 
    {
        if (!(typeof (array[i]) === 'number' && array[i] >= 0 && array[i] <= 9))
            return null;

        result += array[i] * (10 ** i);
    }
    result += number;
    const resultString = result.toString();
    let resultArray = [];
    for (let i = 0; i < resultString.length; i++)
        resultArray.push(+resultString[i]);
    return resultArray;

}

module.exports = {
    addNumber
};
