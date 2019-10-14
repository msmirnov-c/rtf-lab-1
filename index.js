/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
  if (typeof number !== 'number') return null;
  let stringFromArray = '';
  const returnedArray = [];
  array.ForEach((item) => {
    if (item === 0 || item === 1 || item === 2 || item === 3
            || item === 4 || item === 5 || item === 6 || item === 7
            || item === 8 || item === 9) {
      stringFromArray += toString(item);
      return stringFromArray;
    } return null;
  });
  const finalNumber = parseInt(stringFromArray, 10) + number;
  for (let i = 0; i < toString(finalNumber).length; i += 1) {
    returnedArray.push(+finalNumber.charAt(i));
  }
  return returnedArray;
}

module.exports = {
  addNumber,
};
