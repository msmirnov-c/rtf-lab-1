/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (typeof array !== 'object' && typeof number !== 'number') {
        return null;
    }
    
    let outNums = '';
    for (let i = 0; i < array.length; i++) {
        if ((array[i] < 0 || array[i] > 9) || typeof array[i] !== 'number') {
            return null;
        }

        outNums += array[i];
    }
    
    let outArray = Array.from(String(Number(outNums) + number))
    //Объявление переменных(когда этого можно избежать) не будет лишним в коде? В плане загрузки памяти, эффективности, скорости и т.д.
    return outArray.map((el) => Number(el));
}

module.exports = {
    addNumber,
};
