    /**
     * @param array – массив элементов. Например, [1, 8, 3]
     * @param number – число, которое нужно прибавить к числу, полученному из массива
     */
function addNumber(array, number) {
        // Решение задачи
{
    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i] == "number")
        {
            if(array[i] < 0 || array[i] > 9)
            {
                return null;
            }
        } else
        {
            return null;
        }
    }

    if (number < 0 || !Number.isInteger(number))
    {
        return null;
    }

    let arrayNumber = 0;
    for(let i = 0; i < array.length - 1; i++)
    {
        arrayNumber += array[i];
        arrayNumber *= 10;
    }

    arrayNumber += array[array.length - 1];
    arrayNumber += number;

    return arrayNumber.toString().split('');


}

alert(addNumber([1, 0, 9], 2));
alert(addNumber([2, 5, 1], 5));
alert(addNumber([1], 4020));
alert(addNumber([1, '4'], 1));