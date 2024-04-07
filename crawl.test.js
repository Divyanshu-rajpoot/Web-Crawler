const { normalizeUrl, getUrlFormHtml } = require("./crawl.js");

const { test, expect } = require('@jest/globals');

test('normalize url strip protocol', () => {
    const input = 'https://blog.boot.dev/path';
    const actualoutput = normalizeUrl(input); // this will  give the actual output
    const expected = 'blog.boot.dev/path'; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected); // test is good if they are equal 
})


test('normalize url strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path';
    const actualoutput = normalizeUrl(input); // this will  give the actual output
    const expected = 'blog.boot.dev/path'; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected); // test is good if they are equal 
})


test('normalize url capitals', () => {
    const input = 'https://Blog.boot.dev/path';
    const actualoutput = normalizeUrl(input); // this will  give the actual output
    const expected = 'blog.boot.dev/path'; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected); // test is good if they are equal 
})

test('normalize url strip http', () => {
    const input = 'http://blog.boot.dev/path';
    const actualoutput = normalizeUrl(input); // this will  give the actual output
    const expected = 'blog.boot.dev/path'; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected); // test is good if they are equal 
})

test('getUrlFromhtml absoluteurls', () => {
    const inputhtmlbody = `
    <html>
    <body>
        <a href = "https://blog.boot.dev/path/">
            boot.dev blog
        </a>
    </body>
    </html>
    `
    const inputbaseurl = "https://blog.boot.dev";
    const actualoutput = getUrlFormHtml(inputhtmlbody, inputbaseurl); // this will  give the actual output
    const expected = ["https://blog.boot.dev/path/"]; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected);

})

test('getUrlFromhtml relativeURLs', () => {
    const inputhtmlbody = `
    <html>
    <body>
        <a href = "/path/">            
            boot.dev blog
        </a>
    </body>
    </html>
    `
    const inputbaseurl = "https://blog.boot.dev";
    const actualoutput = getUrlFormHtml(inputhtmlbody, inputbaseurl); // this will  give the actual output
    const expected = ["https://blog.boot.dev/path/"]; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected);

})


test('getUrlFromhtml both Relative & absolute', () => {
    const inputhtmlbody = `
    <html>
    <body>
        <a href = "https://blog.boot.dev/path1/">            
            boot.dev blog PATH one
        </a>
        <a href = "/path2/">            
            boot.dev blog PATH two
        </a>
        
    </body>
    </html>
    `
    const inputbaseurl = "https://blog.boot.dev";
    const actualoutput = getUrlFormHtml(inputhtmlbody, inputbaseurl); // this will  give the actual output
    const expected = ["https://blog.boot.dev/path1/","https://blog.boot.dev/path2/"]; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected);

})

test('getUrlFromhtml badUrl', () => {
    const inputhtmlbody = `
    <html>
    <body>
        <a href = "invalid">            
        invalid url
        </a>
        
        
    </body>
    </html>
    `
    const inputbaseurl = "https://blog.boot.dev";
    const actualoutput = getUrlFormHtml(inputhtmlbody, inputbaseurl); // this will  give the actual output
    const expected = []; //this is the expected output of the normalize function on giving input
    expect(actualoutput).toEqual(expected);

})