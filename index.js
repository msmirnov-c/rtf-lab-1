/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.lenght; i++ ) {
        if(typeof array[i] !== 'number') {
            return null;
     } 
    } 

   const str = array.join('');
   const strValue = parseInt(str,10);
   strstrValue += number;
   array1 = array.concat(strValue.splite(''));
   
   return array1;
}

 module.exports = {
    addNumber
};
