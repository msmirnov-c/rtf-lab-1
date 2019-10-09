function addNumber(array, number) {
    let stringOfNumbers = '';
    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i]) === 'number' && array[i] === Math.trunc(array[i]) && array[i] >= 0 && array[i] <= 9) {
            stringOfNumbers += array[i];
        }
        else {
            return null;
        }
    }
    if(typeof(number) == 'number' && number === Math.trunc(number) && number >= 0) {
        stringOfNumbers = (parseInt(stringOfNumbers) + number).toString(10);
        return stringOfNumbers.split('').map(item => parseInt(item));
    }
    else {
        return null;
    }
}

module.exports = {
    addNumber
};