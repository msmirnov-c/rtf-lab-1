function addNumber(array, number) {
    let sum = '';
    let resArray = new Array();
    for (let e of array) {
        if (Number.isInteger(e) && e.toString().length === 1)
            sum += e.toString();
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