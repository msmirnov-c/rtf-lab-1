function addNumber( array, number) 
{
    let numberOfArray = '';
    let resArray = [];
    let check = typeof(number) =='number'&& number == Math.trunc(number);
    if(!check)
    {
        return null;
    }
    for(let i = 0; i < array.length; i++)
    {
        
        if(typeof(array[i]) == 'number' && array[i]>=0 && array[i]<10 && array[i]== Math.trunc(array[i]))
        {
            numberOfArray += array[i];
        }
        else 
        {
            return null;
        }
    }
    
    numberOfArray = +numberOfArray + number;


    numberOfArray =numberOfArray.toString(10);
    for(let i = 0; i < numberOfArray.length; i++)
    {
        resArray[i] = +numberOfArray[i];
    }

    return resArray;
}
   
module.exports = {
    addNumber
};
