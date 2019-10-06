let arr = [1, 5, 3];
let num = 1;

function addNumber(array, number) {
    let sum = '';
    let resArray = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i].toString().length === 1)
            sum += arr[i].toString();
        else return null;
    }
    sum = (parseInt(sum) + number).toString();
    for (let i = 0; i < sum.length; i++) {
        resArray[i] = Number.parseInt(sum[i]);
    }
    return resArray;
}
console.log(addNumber(arr,num));

module.exports = {
    addNumber
};