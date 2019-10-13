function addNumber(array, number) {
    if (!((array.every(item => typeof item ===  'number' ) && array.item > 0 && array.item < 9)));
        return null
        let CisloMassiva =  array.join(''); 
        let Sum =  Number(CisloMassiva) + number;
        let Sum =  String(Sum)
        let Sum =  Sum.split('').map(item => Number(item));
    return Sum 
    
    module.exports = {
    addNumber
    }
};