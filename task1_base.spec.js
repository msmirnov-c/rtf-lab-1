const {addNumber} = require('./index');

const cases = [
    { array: [1, 2, 4], number: 1, expected: [1, 2, 5] },
    { array: [null], number: 125, expected: null }

];

describe('add number', function () {
    for (const c of cases) {
        it(`${JSON.stringify(c.array)} + ${c.number} = ${JSON.stringify(c.expected)}`, () => {
            const res = addNumber(c.array, c.number);

            expect(res).toStrictEqual(c.expected);
        });
    }
});
