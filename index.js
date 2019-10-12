/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    var inputArray = [];
var size = 3; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

//Print the array in the console.
console.log(inputArray);

var x = inputArray.join('');
var integer1=parseInt(x,10);
console.log(integer1);
var integer2=prompt('Enter the positive integer');
var integer4=parseInt(integer2,10);
var integer3=integer1+integer4;
var arr = integer3.toString(10).split('').map(Number);
console.log(arr);

}

module.exports = {
    addNumber
};
