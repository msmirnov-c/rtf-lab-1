function addNumber( array, number) 
{
    let numStr = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] === Math.trunc(array[i]) && array[i] >= 0 && array[i] < 10 && (typeof(array[i]) === 'number')) {
            numStr  += array[i];
        }
        else {
            return null;
        }
    }
    const totalAmount  = number + parseInt(numStr);
    numStr  = totalAmount .toString(10);
    return numStr.split('').map(item => parseInt(item));
}

module.exports = {
    addNumber
};