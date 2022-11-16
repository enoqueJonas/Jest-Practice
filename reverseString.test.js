const { default: expect } = require('expect');
const reverseString = require('./reverseString.js')

it('Reverse String', () => {
    let str = 'abcd';
    let strArr = Array.from(str);

    let reversedStr = reverseString(str);

    expect(strArr.reverse()).toStrictEqual(reversedStr);
})