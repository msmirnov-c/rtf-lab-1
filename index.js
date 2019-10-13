/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    const new_array=[];
    let helper=0;
    let helper_num = 0;
    for (let i = 0; i < array.length; i++)
        for (let j = 1; j < 10; j++)
            if (array[i] === j)
                if (number > 0 && Number.isInteger(number)==true)
                    helper++;
                else
                    return null;
            else
                return null;
    if (helper == array.length)
        for (let i = 0; i < array.length; i++)
            helepr_num = helper_num + array[i] * (10 ^ array.length);
    helper_num += number;
    let x = helper_num;
    let helper_count;
    while (x > 0) {
        x /= 10;
        helper_count++;  //проверить на количество
    }
    for (let i = helper_count-1; i >= 0; i--)//обратный
    {
        helper_num = helper_num  % 10;
        new_array[i] = helper_num; //можно переделать на while
    }
    return new_array;
    // Решение задачи
}

module.exports = {
    addNumber
};