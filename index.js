function addNumber( array, number) 
{
    let numberString = '';

    for (let i = 0; i < array.length; i++)
    {
        if (typeof(array[i]) === 'number' && array[i] >= 0 && array[i] < 10 && array[i] === Math.trunc(array[i]))
        {
            numberString += array[i];
        }
        else 
        {
            return null;
        }
    }

    const resSumInInt = parseInt(numberString) + number;
    numberString = resSumInInt.toString(10);

    return numberString.split('').map(item => parseInt(item));
}

module.exports = {
    addNumber
};
