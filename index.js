/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let MassNum;
for(let i = 0; i <= array.lenght(); i++)
    {
        let MassNum;
        MassNum =+ array[i];
    }
let NewNum;
NewNum = MassNum + number;
    return NewNum;
}
module.exports = {
    addNumber
};