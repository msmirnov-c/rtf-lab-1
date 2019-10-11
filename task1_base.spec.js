const {addNumber} = require('./index');

const cases = [
    { array: [1, 2, 4], number: 1, expected: [1, 2, 5] },
    { array: [0], number: 900, expected: [9,0,0] },
    { array: [7,1,7,7,1], number: 1248, expected: [7,3,0,1,9] },
    { array: [0, '4'], number: 0, expected: null},
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
