/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    let New_Array = [];
    let helper = 0;
    let Helper_Num = 0;
    for (let i = 0; i < array.length; i++){
        for (let j = 1; j < 10; j++){
            if (array[i] === j){
                if (number > 0 && Number.isInteger(number) === true){
                    helper++;
                }
                else
                    return null;
            }
            else
                return null;
        }
    }
    if (helper === array.length){
        for (let i = 0; i < array.length; i++){
            Helper_Num = Helper_Num + array[i] * Math.pow(10,i);
        }
    }
    Helper_Num += number;
    let x = Helper_Num;
    let Helper_Count;
    while (x > 0) {
        x /= 10;
        Helper_Count++;
    }
    for (let i = Helper_Count - 1; i >= 0; i--)
    {
        Helper_Num = Helper_Num % 10;
        New_Array[i] = Helper_Num;
    }
    return New_Array;
    // Решение задачи
}

module.exports = {
    addNumber
};