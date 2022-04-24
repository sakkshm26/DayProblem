// const { expect } = require('chai');
const { generateNumber } = require('./app.js');

const D = {'2020-01-01':4, '2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2};

test('should be all integers', () => {
    const arr = generateNumber(D);
    
    let allIntegers = true;
    for (let element of arr) {
        if(!(element % 1 === 0)) {
            allIntegers = false;
            break;
        }
    }

    expect(allIntegers).toBe(true);
})

