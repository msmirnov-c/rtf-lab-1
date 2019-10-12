/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    var inputArray = [] ;
        var size = 5 ;
    for (var i=0; i<size; i++) 
    { inputArray[i] = prompt('enter element ' + (i+1)) ; }
    console.log(inputArray);
    var x = inputArray.join('');
    var integer1 = parselnt(x,10);
    console.log(integer1);
    var integer2=prompt('enter the positive number');
    var integer4= parselnt(integer2,10);
    var integer3=integer1+integer4;
    var Arr=integer3.tostring(10).split('').map(number);
    console.log(Arr);
    
    
    
    
}

module.exports = {
    addNumber
};
