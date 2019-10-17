/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const right = (item) => (!Number.isInteger(number) || (typeof item === 'number'));
    if (!array.every(right)) {
        return null;
    }
    
    {
        const str1 = array.reduce((arr, num) => arr + num, '');
        const amount = +str1 + number;
        const array1 = amount.toString().split('');
        const result = (array1.map((correct) => parseInt((correct), 10)));
        
        return result;
    }
}
module.exports = {
    addNumber,
};
