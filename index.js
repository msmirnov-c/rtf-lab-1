/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (typeof array !== 'object' && typeof number !== 'number') return null;
    let outNums = "";
    array.forEach(function (arr) {
        if (typeof arr === 'number');
        else { outNums = 'exit'; return null; }
        if (arr < 0 || arr > 9) { outNums = 'exit'; return null; }
        else outNums += arr;
    });
    return outNums == 'exit' ? null : Array.from((Number(outNums) + number) + '').map(arr => Number(arr));
    //а щас пройдет?
}
module.exports = {
    addNumber,
};
