function addNumber(array, number) {
    let numFromArray = '';
    const even = function (element) {
        return ((typeof element) !== 'number') || ((element < 0) || (element > 9));
    };

    if (array.some(even)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        numFromArray += String(array[i]);
    }

    numFromArray = String(Number(numFromArray) + number);
    let returnedArray = numFromArray.split('');
    returnedArray = returnedArray.map(function (elem) {
        return Number(elem);
    });
    
    return returnedArray;
}

module.exports = {
    addNumber,
};
