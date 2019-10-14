/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) 
{ 
	let n;
	let d = [];
	for (let i of array)
	{
		if (typeof(i) !== 'number' && i >= 9)
		{
			return null;
			break;
		}
		else
		{
			n=(array.reduce((total, current) => total + current)) + number;
			while(n > 0)
			{
				d += n % 10;
				n = Math.floor(n / 10);
			}
			return d;
	}
}

module.exports = {
    addNumber
};


