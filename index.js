function addNumber(array, number) {
        length = array.length;
        let res = 0;
        let k = Math.pow(10, length - 1);
        for (var i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number') {
            let s = array[i] * k;
            k = k / 10;
            res = res + s
                                        

                } else {
                        return null		
                }
                        
        }
let numb = res + number
let n = numb.toString().length;
let arr = [];
for(i=0; i < n; i++) {
        arr[n - 1 - i] = numb % 10
        numb = Math.floor(numb/10)
}
return arr
}
addNumber([2, 0, 9], 2); // 109 + 2 = 111; => [1, 1, 1]
addNumber([2, 5, 1], 5); // 251 + 5 = 256; => [2, 5, 6]
addNumber([1], 4020); // 1 + 4020 = 4021; => [4, 0, 2, 1]
addNumber([1, '4'], 1); // некорректный элемент => null 
