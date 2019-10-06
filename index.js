function addNumber(array, number) {
    let sum = '';
    let resArray = new Array();
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i]) && array[i].toString().length === 1)
            sum += array[i].toString();
        else return null;
    }
    sum = (parseInt(sum) + number).toString();
    for (let i = 0; i < sum.length; i++) {
        resArray[i] = Number.parseInt(sum[i]);
    }
    return resArray;
}

module.exports = {
    addNumber
};