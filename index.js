/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let str = '', arr = [];
    for (let i of array) {
        if (isNaN(i) || i > 9 || i < 0 || i === null || i === Infinity)
            return null;
        str += i.toString();
    }
    str = parseInt(str);
    str += number;
    for (let i of str.toString()){
        arr.push(parseInt(i));
    }
    return arr;
    
}
/*let array = [1, 2, 4];
const number = 1;
array = addNumber(array, number);
if(array != null){
    for (let i of array){
        console.log(i);
    }
}
else console.log('sosat');
*/
module.exports = {
    addNumber
};