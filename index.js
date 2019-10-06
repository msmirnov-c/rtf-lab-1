function addNumber(array, number) {
    let sum = '';
    let resArray = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i].toString().length === 1)
            sum += arr[i].toString();
        else return console.log('null');
    }
    sum = (parseInt(sum) + number).toString();
    for (let i = 0; i < sum.length; i++) {
        resArray[i] = sum[i];
    }
    return resArray;
}

module.exports = {
    addNumber
};