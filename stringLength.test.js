const { default: expect } = require('expect');
const stringLength = require('./stringLength.js');

it('Empty string', () => {
    let str = stringLength(' ')

    expect(str).not.toBeNull;
    expect(str).not.toBeUndefined;
})

it('String size', () => {
    let str = stringLength('abcdefghi');
    
    expect(str).toBeLessThan(10);
    expect(str).toBeGreaterThan(1);
})
