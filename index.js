function addNumber(array, number) {

    for (let i = 0; i < array.length; i++) {
        if (!Number.isInteger(array[i]) || array[i] < 0 || array > 9)
            return null;
    }
    let arrayNum = '';
    for (let i = 0; i < array.length; i++) {
        arrayNum += array[i];
    }

    const stringNumber = (parseInt(arrayNum, 10) + number).toString();

    const newArray = [];

    for (let i = 0; i < stringNumber.length; i++) {
        newArray[i] = parseInt(stringNumber[i], 10);		
    }

    return newArray;
}

module.exports = {
    addNumber
};
