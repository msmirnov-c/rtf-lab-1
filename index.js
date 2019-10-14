/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
	var temp;
	if(!Number.isInteger(number) || number < 0){
		return null;
	}
	array.forEach(function(element){
		if(!Number.isInteger(element) || element < 0 || element > 9){
			return null;
		}
		temp += element;
	});
	temp = parseInt(temp) + number;
    return temp.toString().split('').map(Number);
}

module.exports = {
    addNumber
};