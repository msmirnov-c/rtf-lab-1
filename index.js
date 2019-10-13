/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let flag = false;
    let str = '';
    array.forEach(element => {
        if (!Number.isInteger(element)) flag = true;
    });
    array.forEach(element => {
        if (element >= 0 && element <= 9 && Number.isInteger(element)) {
            str += element;
        }
    });
    let num;
    num = parseInt(str, 10);
    num += number;
    let lastnum = '';
    lastnum = num.toString();
    const arr = [];
    for (let i = 0; i < lastnum.length; i++) {
        arr.push(parseInt(lastnum[i], 10));
    }

    if (flag === false) return arr;

    return null;
}

module.exports = {
    addNumber,
};