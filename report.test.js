const { sortpages } = require("./report.js");

const { test, expect } = require('@jest/globals');

test('sort 2 pages', () => {
    const input = {
        'https://wagslane.dev/path' : 1,
        'https://wagslane.dev' : 3
    };
    const actualoutput = sortpages(input);
    const expected = [
        ['https://wagslane.dev' , 3] ,
        ['https://wagslane.dev/path' , 1]
    ];
    expect(actualoutput).toEqual(expected); 
})


test('sort 5 pages', () => {
    const input = {
        'https://wagslane.dev/path1' : 1,
        'https://wagslane.dev/path2' : 15,
        'https://wagslane.dev/path3' : 2,
        'https://wagslane.dev/path4' : 7,
        'https://wagslane.dev/path5' : 4,
    };
    const actualoutput = sortpages(input);
    const expected = [
        ['https://wagslane.dev/path2' , 15],
        ['https://wagslane.dev/path4' , 7],
        ['https://wagslane.dev/path5' , 4],
        ['https://wagslane.dev/path3' , 2],
        ['https://wagslane.dev/path1' , 1]
    ];
    expect(actualoutput).toEqual(expected); 
})