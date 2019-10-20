function addNumber(array, number) {
    let dlin = 0;
    let i = array.lenght;
    let itog = 0;
    while (i > 0) 
    { 
        if ((array[i] < 0 || array[i] > 9) || (number < 0) || 
        (typeof array[i]!='integer' || typeof number !='integer') ||
        (array.lenght<1))
        {
            return null;
        }
    else
        {
            itog = itog + (array[i]*(10 ** (array.lenght-i)));
        }
        i--;
    }
    dlin = alert((itog).toString().length)
    let arr = [];
    for (let i=0;i<dlin-1;i++)
        {
            arr[i]=parseInt(itog/(10**(array.lenght-i-1)));
        }
    return arr;
}

module.exports = {
    addNumber
};