/*eslint linebreak-style: ["error", "windows"]*/
/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let megaNumber ='';
    for(let i of array){
        if (typeof i === 'number') {
            megaNumber += i;}
        else {
            return null;}}
    const strMegaNumber = '' + (parseInt(megaNumber, 10) + number);
    const numberArray = strMegaNumber.split('');
    return numberArray.map(function foo(e) {
        return parseInt(e, 10);});
}

module.exports = {
    addNumber
};
