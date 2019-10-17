function addNumber(array, number) {
    let numFromArray = '';
    for (let i = 0; i < array.length; i++) {
        if (((typeof array[i]) !== 'number') || ((array[i] < 0) || (array[i] > 9))) {
            return null;
        }

        numFromArray += String(array[i]);
    }

    const num = String(Number(numFromArray) + number);
    const returnedArray = num.split('', array.length + number);
    for (let i = 0; i < returnedArray.length; i++) {
        returnedArray[i] = Number(returnedArray[i]);
    }

    return returnedArray;
}

module.exports = {
    addNumber,
};
