/* eslint linebreak-style: ["error", "windows"] */
/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != typeof number)
            return (null);
    }
            
            
    const sum = String(parseInt(array.join(''), 10) + number);
    const array2 = [];
    array2 = sum.split('');
    const array3 = [];
    for {let j = 0; j < array2.length; j++)
    array3[j] = parseInt(array2[j], 10};
                         
    return (array3);
}

module.exports = {
    addNumber,
};
