function addNumber(array, number) {

    for (let j = 0; j < array.length; j++) {
        if (!Number.isInteger(array[j]) || array[j] < 0 || array > 9)
            return null;
    }
    let arrayNumber = '';
    for (let i = 0; i < array.length; i++) {
        arrayNumber += array[i];
    }

    const stringNumber = (parseInt(arrayNumber, 10) + number).toString();

    const newArray = [];

    for (let i = 0; i < stringNumber.length; i++) {
        newArray[i] = parseInt(stringNumber[i], 10);
    }

    return newArray;
}

module.exports = {
    addNumber
};
