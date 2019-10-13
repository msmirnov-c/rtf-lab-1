function addNumber(array, number) {
  let n1 = 0;

  if(number >= 0 && typeof(number)=="number"){
      let s = new String(number);
      if(s.indexOf(".")>=0)
      return null;
  }
  else{
      return null;
  }

  // array.forEach(function(item, i, array) {
  //console.log(item);
  if(!array.every(function(item, i, array) {
  if(item >= 0 && item <= 9 && typeof(item)=="number"){
      n1 = n1 * 10 + item;
      return true;
      }
      else{
          return false;
      }       
})) 
return null;

n1 += number;
return String(n1).split('').map(Number);
}

module.exports = {
  addNumber
};