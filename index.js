const array = [1, 2, 3];
number = 44;

function addNumber(array, number) {
    let sum = 0, i;
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] != "string" && array[i] <= 9 && array[i] >= 0)
            sum = sum * 10 + array[i];
        else
            return null;
    }

    sum = sum + number;
    let sum1 = [];
    let len = sum.toString().length;
    for (i = len; i > 0; i--) {
        sum1[i - 1] = sum % 10;
        sum = Math.trunc(sum / 10);
    }

    return (sum1)
}

sum = addNumber(array, number);
console.log(sum);

module.exports = {
    addNumber,
}
Enter;
