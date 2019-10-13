function addNumber(array, number) {
    const array1 = [];
    let transnum = '';

    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === 'number' && array[i] >= 0 && array[i] <= 9 && array[i] === Math.trunc(array[i])) {
            transnum += array[i]; }

        else {
            return null;
        }
    }

    transnum = (+transnum + number).toString(10);

    for (let i = 0; i < transnum.length; i++) {
        array1[i] = +transnum[i];
    }
    return array1;
}

addNumber([1, 0, 9], 2); // 109 + 2 = 111; => [1, 1, 1]
addNumber([2, 5, 1], 5); // 251 + 5 = 256; => [2, 5, 6]
addNumber([1], 4020); // 1 + 4020 = 4021; => [4, 0, 2, 1]
addNumber([1, '4'], 1); // некорректный элемент => null
