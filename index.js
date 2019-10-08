function addNumber( array, number) 
{
    let numberOfArray = '';
    let tempNumberOfArray = 0;

    for (let i = 0; i < array.length; i++)
    {
        if (typeof(array[i]) === 'number' && array[i] >= 0 && array[i] < 10 && array[i] === Math.trunc(array[i]))
        {
            numberOfArray += array[i];
        }
        else 
        {
            return null;
        }
    }

    tempNumberOfArray = parseInt(numberOfArray);
    tempNumberOfArray += number;
    numberOfArray = tempNumberOfArray.toString(10);

    return numberOfArray.split('').map(item => parseInt(item));
}

module.exports = {
    addNumber
};
