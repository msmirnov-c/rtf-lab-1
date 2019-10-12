/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for(let el of array){
        if(typeof el !== 'number' || el < 0 || el > 9 || typeof number !== 'number')
            return null;
    }
    let stringNumber= String(+array.join('') + number);
    let newArr=stringNumber.split('');
    return newArr.map(item=>Number(item));
}

module.exports = {
    addNumber
};
