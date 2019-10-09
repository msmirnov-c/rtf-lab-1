/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let varForChangeMassive = ''
    const arrayForOut = [];    
    if (array.some(elem => isNaN(elem) || elem > 9  || elem < 0 || elem === null || Math.floor(elem) != elem))
        return null;
    for(let i of array){
        varForChangeMassive += i.toString();
    }
    varForChangeMassive = parseInt(varForChangeMassive) + number;
    return Array.from(varForChangeMassive.toString(10)).map(item => parseInt(item));
}

module.exports = {
    addNumber
};