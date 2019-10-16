function addNumber(array, number) {
    if (array.every(i => !Number.isInteger(i) || i < 0 || i > 9))
        return null;

    let arrayNum = array.reduce(function(sum, current) {
        return sum.toString() + current.toString();
    }, 0);

    const stringNumber = (parseInt(arrayNum, 10) + number).toString();

    const newArray = [];

    for (let i = 0; i < stringNumber.length; i++) {
        newArray[i] = parseInt(stringNumber[i], 10);
    }

    return newArray;
}

module.exports = {
    addNumber,
};
