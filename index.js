/**
*@param array – массив элементов. Например, [1, 8, 3]
*@param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let numLine = '';
    array.forEach((_item, i) => {
        if (array[i] === Math.trunc(array[i]) && array[i] < 0 && array[i] > 9 && (typeof (array[i]) === 'number') && array[i] === null && (typeof (number) === 'number')) {
            return null;   
        }
        numLine += array[i];

        return numLine.push;
        
    });

    return (number + parseInt(numLine, 10)).toString(10).split('').map((item) => parseInt(item, 10));
}
console.log(addNumber([1,2,3],5)) 
module.exports = {
    addNumber,
};
