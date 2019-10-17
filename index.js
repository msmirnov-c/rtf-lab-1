/* 
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, F
*/
function addNumber(array, number) {

    let final = array.every((item) => typeof (item) === 'number');
    if (!final || array.length === 0) {
        return null;
    }

    let numberFinal = number + parseInt(array.join(''), 10);

    return numberFinal.toString().split('').map(Number);
}

console.log(addNumber([1,2,3],5))
module.exports = {
    addNumber
};
