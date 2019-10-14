// eslint-disable-next-line no-unused-vars
function digitFind(array, number) {
    let i = 1;
    let digit = 0;
    for(let j = array.length - 1; j >= 0; j--)
    {
        if(array[j] > 9 || array[j] < 0 || !Number.isInteger(array[j]))
        {
            return null;
        }
        digit += array[j] * i;
        i *= 10;
    }
    return digit + number;
}

function addNumber(array, number) {
    let digit = digitFind(array, number);
    if(digit == null)
    {
        return null;
    }
    return digit.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};