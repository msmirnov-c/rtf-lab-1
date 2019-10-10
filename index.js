/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let result ='';
    for(let i of array)
    {
        if(typeof(i) === 'number' && !isNaN(i)) result += i;
        else return null;
    }
    result = '' + (+result + number);
    result = result.split('');
    for(let i = 0; i < result.length; i++)
    {
        result[i] = parseInt(result[i]);
    }
    return result;
}

module.exports = {
    addNumber
};
