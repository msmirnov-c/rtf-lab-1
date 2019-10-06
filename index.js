/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let sum = '';
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i].toString().length === 1)
            sum += arr[i].toString();
        else return console.log('null');
    }
    sum = parseInt(sum) + number;
    console.log(sum);
}

module.exports = {
    addNumber
};