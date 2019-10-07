function addNumber(array, number) {
    let sum = '';
    let resultArray = [];

    for (let e of array) {
        if (Number.isInteger(e) && e.toString().length === 1)
            sum += e.toString();
        else return null;
    }

    sum = (parseInt(sum) + number).toString();
    resultArray = sum.split('').map(Number);
    return resultArray;
}

module.exports = {
    addNumber
};