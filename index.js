function addNumber(array, number) {
    let sum = 0;
    let i;
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && array[i] <= 9 && array[i] >= 0) {
            sum = sum * 10 + array[i];
        } else return null;
    }

    sum += number;
    const sum1 = [];
    const len = sum.toString().length;
    for (i = len; i > 0; i--) {
        sum1[i - 1] = sum % 10;
        sum = Math.trunc(sum / 10);
    }

    return (sum1);
}

const sum = addNumber(array, number);
module.exports = {
    addNumber,
};
Enter;