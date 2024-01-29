//Lab 2 - 101308759
// test/calculator.test.js

const chai = require('chai');
const { add, sub, mul, div } = require('../calculator');

const expect = chai.expect;

describe('Calculator Tests', () => {
    it('should add two numbers', () => {
        const result = add(5, 2);
        const expected = 7;
        console.log(`add(5, 2) expected result ${expected} ${result === expected ? 'PASS' : 'FAIL'}`);
        expect(result).to.equal(expected);
    });

    it('should fail to add two numbers', () => {
        const result = add(5, 2);
        const expected = 8;
        console.log(`add(5, 2) expected result ${expected} ${result === expected ? 'PASS' : 'FAIL'}`);
        expect(result).to.equal(expected);
    });

    it('should subtract two numbers', () => {
        const result = sub(5, 2);
        const expected = 3;
        console.log(`sub(5, 2) expected result ${expected} ${result === expected ? 'PASS' : 'FAIL'}`);
        expect(result).to.equal(expected);
    });

    it('should fail to subtract two numbers', () => {
        const result = sub(5, 2);
        const expected = 5;
        console.log(`sub(5, 2) expected result ${expected} ${result === expected ? 'PASS' : 'FAIL'}`);
        expect(result).to.equal(expected);
    });

    it('should multiply two numbers', () => {
        const result = mul(5, 2);
        const expected = 10;
        console.log(`mul(5, 2) expected result ${expected} ${result === expected ? 'PASS' : 'FAIL'}`);
        expect(result).to.equal(expected);
    });

    it('should fail to multiply two numbers', () => {
        const result = mul(5, 2);
        const expected = 12;
        console.log(`mul(5, 2) expected result ${expected} ${result === expected ? 'PASS' : 'FAIL'}`);
        expect(result).to.equal(expected);
    });

    it('should divide two numbers', () => {
        const result = div(10, 2);
        const expected = 5;
        console.log(`div(10, 2) expected result ${expected} ${result === expected ? 'PASS' : 'FAIL'}`);
        expect(result).to.equal(expected);
    });

    it('should fail to divide two numbers', () => {
        const result = div(10, 2);
        const expected = 2;
        console.log(`div(10, 2) expected result ${expected} ${result === expected ? 'PASS' : 'FAIL'}`);
        expect(result).to.equal(expected);
    });
});
