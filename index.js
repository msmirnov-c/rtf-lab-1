function addNumber(array, number) {
    if (!(array.every(item => typeof item ===  'number' )));
        return null
        var cislomassiva =  array.join('') 
        var sum = String((Number(cislomassiva) + number)).split('').map(item => Number(item));
    return sum 
    
    
    };