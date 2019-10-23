/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let stri;
    let numb;
   for(let i = 0; i <= array.length; i++) {
       if (!isNaN(array[i]) || array.length === 0 ){
           return null;
       }
       stri = stri + (String(array[i]));
   }
   numb = String(number + Number(stri));
   numb.split('');
   for(let i = 0; i < numb.length; i++){
       numb[i] = Number(numb[i]);
   }
   return numb;
}

module.exports = {
    addNumber
};