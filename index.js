/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number)
{
    var degree = array.length;
    var num = 0;
    const newArray = [];
    var lengthOfElem = array.every(item => item.length === 1);// Решил использовать флаги для того чтобы лучше разобраться с работой every
    var typeOfElem = array.every(item => typeof item === 'number');//Проверка на тип данных
    var arrayIsExist = isNaN(array);// Проверка на существование массива

    if (lengthOfElem == true || typeOfElem == true || arrayIsExist == false )
    {
        for(let i = 0; i < array.length; i++) // из массива в число
        {
            if (Math.floor(i) !== i) throw null;
            num += (array[i]*Math.pow(10,degree));
            degree--;
        }
        num = number + num; // сложили новое число
        for (let i of num.toString(10))
            newArray.push(parseInt(i));
    }
    else return null;// не подходит по усовию
    return newArray;// возвращаю массив
}

module.exports = {
    addNumber
};
