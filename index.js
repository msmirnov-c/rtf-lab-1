function addNumber(array, number) {
    if (!(array.every(item => typeof item ===  'number' )));
        return null
        let sum = String((Number(array.join('')) + number)).split('').map(item => Number(item));
    return sum 
    }

    addNumber([1, 0, 9], 2); // 109 + 2 = 111; => [1, 1, 1]
    addNumber([2, 5, 1], 5); // 251 + 5 = 256; => [2, 5, 6]
    addNumber([1], 4020); // 1 + 4020 = 4021; => [4, 0, 2, 1]
    addNumber([1, '4'], 1); // некорректный элемент => null