/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let str = '';
    flag = array.every(element => (element >= 0 && element <= 9 && Number.isInteger(element)));
    array.forEach((element) => {
        {
            str += element;
        }
    });
    num = parseInt(str, 10);
    num += number;
    lastnum = num.toString();
    let arr = lastnum.split('');
    arr = arr.map(lastnum => parseInt(lastnum));
    
    if (flag === true) return arr;

    return null;
}

module.exports = {
    addNumber,
};
