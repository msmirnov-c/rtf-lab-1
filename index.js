function addNumber(array, number) {
    if (!((array.every(item => typeof item ===  'number' ) && array.item > 0 && array.item < 9)));
        return null
        var cislomassiva =  array.join('') 
        var sum = String((Number(cislomassiva) + number)).split('').map(item => Number(item));
    return sum 
    
    addNumber([1, 0, 9], 2);
    addNumber([2, 5, 1], 5);
    addNumber([1], 4020);
    addNumber([1, '4'], 1);
    };