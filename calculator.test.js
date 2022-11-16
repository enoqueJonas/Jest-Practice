const { default: expect } = require('expect');
const calculator = require('./calculator.js');


describe('Calculator', () => {
    describe('Add operation', () => {
        it('Number null or undefined', ()=> {
            let a;
            let b = 5;
            const calc = new calculator();
    
            const add = calc.add(a, b);
    
            expect(add).not.toBeUndefined;
        })
    })
    
    describe('Subtract operation', () => {
        it('Number null or undefined', ()=> {
            let a;
            let b = 5;
            const calc = new calculator();
    
            const sub = calc.subtract(a, b);
    
            expect(sub).not.toBeUndefined;
        })
    })

    describe('Multiply operation', () => {
        it('Number null or undefined', ()=> {
            let a;
            let b = 5;
            const calc = new calculator();
    
            const multi = calc.multiply(a, b);
    
            expect(multi).not.toBeUndefined;
        })
    })

    describe('Divide operation', () => {
        it('Number is 0', ()=> {
            let a = 1;
    
            expect(a).not.toBe(0);
        })

        it('Number null or undefined', ()=> {
            let a;
            let b = 5;
            const calc = new calculator();
    
            const divide = calc.divide(a, b);
    
            expect(divide).not.toBeUndefined;
        })
    })
})