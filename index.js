/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let str = '';
    const flag = array.every((element) => (element >= 0
        && element <= 9 && Number.isInteger(element)));
    array.forEach((element) => {
        str += element;
    });
    let num = parseInt(str, 10);
    num += number;
    const lastnum = num.toString();
    let arr = lastnum.split('');
    arr = arr.map((lastn) => parseInt(lastn, 10));

    if (flag === true) return arr;

    return null;
}

module.exports = {
    addNumber,
};
