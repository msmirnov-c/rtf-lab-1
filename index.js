function addNumber(array, number) {
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