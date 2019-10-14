/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (typeof array !== 'object' && typeof number !== 'number') return null;

    let outNums = '';
    for (let i = 0; i < array.length; i++) {
        if ((array[i] < 0 || array[i] > 9) || typeof array[i] !== 'number') {
            outNums = 'exit';

            return null;
        }
        
        outNums += array[i];

    }

    return outNums === 'exit' ? null : Array.from((Number(outNums) + number) + '').map((arr) => Number(arr));
}

module.exports = {
    addNumber,
};
