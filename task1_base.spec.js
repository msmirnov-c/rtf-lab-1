const {addNumber} = require('./index');

const cases = [
    { array: [1, 2, 4], number: 1, expected: [1, 2, 5] },
    { array: [null], number: 125, expected: null },
    { array: [9, 9, 9], number: 1, expected: [1, 0, 0, 0] },
    { array: [1, '2', 3], number: 125, expected: null },
    { array: [NaN, 2, 4], number: 1, expected: null },
    { array: [true, 2, 3], number: 125, expected: null }
];

describe('add number', function () {
    for (const c of cases) {
        it(`${JSON.stringify(c.array)} + ${c.number} = ${JSON.stringify(c.expected)}`, () => {
            const res = addNumber(c.array, c.number);

            expect(res).toStrictEqual(c.expected);
        });
    }
});
