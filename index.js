/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) { 
    let error = false; //флаг ошибки 
    
    if (array != null) 
    { 
        let stringNumber = ""; //строка в которую положим цифры 
        let resultNumber = 0; 

        if (array.length !== 0) 
        { 
            array.forEach(element => { //идем по массиву и присоединяем цифры к строке 
                if (element >= 0) // если тип элемента число, то 
                    stringNumber += element; //присоединяем к строке 
                if (typeof(element) != "number") 
                    error = true; //иначе поднимаем флаг ошибки 
            }); 
        resultNumber = parseInt(stringNumber); //получаем число из строки 
        } 
    
        resultNumber += number; //прибавляем заданное число 
        resultNumber = resultNumber.toString(); //возвращаемся к строке 
    
        let resultArray = [] //массив результата 
        for (let i = 0; i < resultNumber.length; i++) //идем по символам строки 
            resultArray.push(parseInt(resultNumber[i])); //переводим символ строки в число и записываем в массив 
        if (error == false) 
            return resultArray; //возвращаем результат 
    } 
    else 
        error = true; 
        
    if (error === true) //если флаг ошибки поднят, то 
        return null; 
}

module.exports = {
    addNumber
}