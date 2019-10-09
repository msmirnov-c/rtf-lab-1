/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let varForOutputMassive = ''   
    if (array.some(elem => isNaN(elem) || elem > 9  || elem < 0 || elem === null || Math.floor(elem) != elem))
        return null;
    for(let i of array){
        varForOutputMassive += i.toString(10);
    }
    varForOutputMassive = parseInt(varForOutputMassive) + number;
    return Array.from(varForOutputMassive.toString(10)).map(item => parseInt(item));
}

module.exports = {
    addNumber
};