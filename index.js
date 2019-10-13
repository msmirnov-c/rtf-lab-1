/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let megaNumber ='';
    for(let i of array)
    {
        if(typeof(i) === 'number' && !isNaN(i)) {
            megaNumber += i;
        }
        else {
            return null;
        }
    }
    let strMegaNumber = '' + ( parseInt(megaNumber) + number);
    let numberArray = strMegaNumber.split('');
    return numberArray.map(function(e) {
        return parseInt(e);
    });
}

module.exports = {
    addNumber
};