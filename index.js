/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    // Решение задачи
    var sum = 0; //переменная для суммы цифр
    var stack = []; //стек для разделения суммы
    var result = []; //массив для результата
    var str = "";
    //цикл по элементам массива
    for (var i = 0; i < array.length; i++)
    {
        //проверяем на число
        if (Number.isInteger(array[i]))
        {
            //и на то что оно от 0 до 9
            if (array[i] > 0 && array[i] <= 9)
            //переводим массив в строку, чтобы потом перевести в число
                str = str + array[i].toString();
        }
        //иначе вернем null
        else
        {
            return "null";
        }
    }
    //строку переводим в число и прибавляем number
    sum = parseInt(array.join("")) + number;
    //разделяем число на элементы, загоняя их в стек
    while (sum > 0)
    {
        stack.push(sum % 10);
        sum = Math.floor(sum / 10);
    }
    //достаем из стека элементы и загоняем в результирующий массив
    while(stack.length > 0)
    {
        result.push(stack.pop());
    }
    return result;
}

module.exports = {
    addNumber
};