function addNumber(array, number) {
    if (!(array.every(item => typeof item ===  'number' ) && 
            array.item > 0 && array.item < 9));
        return null
        let CisloMassiva =  array.join(''); 
        let Sum =  Number(CisloMassiva) + 
        number;
        let Sum1 =  String(Sum); 
        let Sum2 =  Sum1.split(''); 
        let Sum3 =  Sum2.map(item => 
        Number(item));
    return Sum3 
    
    module.exports = {};
    addNumber
};