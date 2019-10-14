/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) 
{
    var f = false;
    var str = '';
    arr.forEach(function(item, i, array) {
        str = str+String(item);
        if ((typeof item) != 'number')
            f = true;
    });
    var num = String(Number(str) + number);
    var retArr = num.split('',array.length+number);
    for (let i = 0; i < retArr.length; i++)
        retArr[i] = Number(retArr[i]);
    if ((number<0)||(f))
        return null;
    else 
        return retArr;
}
module.exports = {
    addNumber
};