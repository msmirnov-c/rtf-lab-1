function addNumber(array, number) {
    if (!((array.every(item => typeof item ===  'number' ) && array.item > 0 && array.item < 9)));
        return null
        let cislomassiva =  array.join('') 
        Number(cislomassiva) + number; 
        let sum = String((Number(cislomassiva) + number)).split('').map(item => Number(item));
    return Sum 
    
    module.exports = {
    addNumber
    }
};