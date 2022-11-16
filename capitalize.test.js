const { default: expect } = require('expect');
const { it } = require('jest-circus');
const capitalize = require('./capitalize.js');

test('Capitalized', () => {
    let str = 'Flex';

    const capitalized = capitalize('Flex');

    expect(capitalized).toEqual(str);
})