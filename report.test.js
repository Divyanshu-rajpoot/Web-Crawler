const { sortpages } = require("./report.js");

const { test, expect } = require('@jest/globals');

test('sort 2 pages', () => {
    const input = {
        'https://divyanshu.dev/path' : 1,
        'https://divyanshu.dev' : 3
    };
    const actualoutput = sortpages(input);
    const expected = [
        ['https://divyanshu.dev' , 3] ,
        ['https://divyanshu.dev/path' , 1]
    ];
    expect(actualoutput).toEqual(expected); 
})


test('sort 5 pages', () => {
    const input = {
        'https://divyanshu.dev/path1' : 1,
        'https://divyanshu.dev/path2' : 15,
        'https://divyanshu.dev/path3' : 2,
        'https://divyanshu.dev/path4' : 7,
        'https://divyanshu.dev/path5' : 4,
    };
    const actualoutput = sortpages(input);
    const expected = [
        ['https://divyanshu.dev/path2' , 15],
        ['https://divyanshu.dev/path4' , 7],
        ['https://divyanshu.dev/path5' , 4],
        ['https://divyanshu.dev/path3' , 2],
        ['https://divyanshu.dev/path1' , 1]
    ];
    expect(actualoutput).toEqual(expected); 
})