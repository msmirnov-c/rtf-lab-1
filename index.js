/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number)
{
    var num = 0;
    let newArray = [];
    var lengthOfElem = array.every(item => item.length === 1);// Решил использовать флаги для того чтобы лучше разобраться с работой every
    var typeOfElem = array.every(item => typeof item === 'number');//Проверка на тип данных
    var integer = array.every(item => Number.isInteger(item));
    var arrayIsExist = isNaN(array);// Проверка на существование массива

    if (lengthOfElem === false || typeOfElem === false || arrayIsExist === true || integer === false || number.isInteger === false )
        return null;// не подходит по усовию
    for(let i = 0; i < array.length; i++)
        if (array[i].isInteger === false) throw null;
    num = array.join();
    num = Number(num.replace(/,/g, ''));
    num += number;
    newArray = num.toString(10).split('').map(Number);
    return newArray;// возвращаю массив
}

module.exports = {
    addNumber
};

// прошлый вариант парсинга, до изобретения join();
//for(let i = 0; i < array.length; i++) // из массива в число
//  {
//      if (Math.floor(i) !== i) throw null;
//      num += (array[i]*Math.pow(10,degree));
//      degree--;
//  }
//  num = number + num; // сложили новое число
//    if (Math.floor(array[i]) !== i) throw null;
//for (let i of num.toString(10))
//  newArray.push(parseInt(i));
