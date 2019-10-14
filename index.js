function addNumber(array, number) 
{
    if (!array.every(item => typeof item ===  'number' ));
        return null
        let s = ((Number(array.join('')) + number)).tostring().split('').map(item => Number(item));
    return s
    }

    addNumber([2, 1, 7], 2);
    addNumber([4, 3, 9], 1); 
    addNumber([4], 3123);
    addNumber([2, '3'], 7);