const {normalizeUrl} = require("./crawl.js");

const {test , expect} = require('@jest/globals');

test('normalize url strip protocol', ()=>{
    const input = 'https://blog.boot.dev/path';
    const actualoutput = normalizeUrl(input); // this will  give the actual output
    const expected = 'blog.boot.dev/path'; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected); // test is good if they are equal 
})


test('normalize url strip trailing slash', ()=>{
    const input = 'https://blog.boot.dev/path';
    const actualoutput = normalizeUrl(input); // this will  give the actual output
    const expected = 'blog.boot.dev/path'; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected); // test is good if they are equal 
})


test('normalize url capitals', ()=>{
    const input = 'https://Blog.boot.dev/path';
    const actualoutput = normalizeUrl(input); // this will  give the actual output
    const expected = 'blog.boot.dev/path'; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected); // test is good if they are equal 
})

test('normalize url strip http', ()=>{
    const input = 'http://blog.boot.dev/path';
    const actualoutput = normalizeUrl(input); // this will  give the actual output
    const expected = 'blog.boot.dev/path'; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected); // test is good if they are equal 
})

