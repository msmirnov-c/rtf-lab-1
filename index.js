/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let error = false; //флаг ошибки

    let stringNumber = ""; //строка в которую положим цифры
    array.forEach(element => { //идем по массиву и присоединяем цифры к строке
        if (typeof(element) === "number") // если тип элемента число, то
            stringNumber += element; //присоединяем к строке
        else 
            error = true; //иначе поднимаем флаг ошибки
    });

    if (error == false) //если флаг ошибки опущен, то
    {
        let resultNumber = parseInt(stringNumber); //получаем число из строки
        resultNumber += number; //прибавляем заданное число
        resultNumber = resultNumber.toString(); //возвращаемся к строке

        let resultArray = [] //массив результата
        for (let i = 0; i < resultNumber.length; i++) //идем по символам строки
            resultArray.push(parseInt(resultNumber[i])); //переводим символ строки в число и записываем в массив
        return resultArray; //возвращаем результат
    }
    else
        return null;    
}

addNumber([1, 0, 9], 2); // 109 + 2 = 111; => [1, 1, 1]
addNumber([2, 5, 1], 5); // 251 + 5 = 256; => [2, 5, 6]
addNumber([1], 4020); // 1 + 4020 = 4021; => [4, 0, 2, 1]
addNumber([1, '4'], 1); // некорректный элемент => null

module.exports = {
    addNumber
};