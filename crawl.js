const { JSDOM } = require('jsdom');

async function crawlPage(currentURL) { // crawling the page
    console.log(`actively crawling: ${currentURL}`);
    
    try {
        const resp = await fetch(currentURL);

        if (resp.status > 399) {
            console.log(`error in fetch with status code ${resp.status} on page ${currentURL}`);
            return;
        }
        const contenttype = resp.headers.get("content-type") //checks the content type of headers
        if (contenttype.includes("text/html")) {
            console.log(`non html response content type: ${contenttype} on page: ${currentURL} `);
        }
        console.log(await resp.text());
    } catch (error) {
        console.log(`error in fetch: ${error.message} , on page : ${currentURL}`);
    }
    
}

function getUrlFormHtml(htmlBody , baseUrl) {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');
    for(const linkElement of linkElements){
        if (linkElement.href.slice(0,1) === '/') {
            //relative url
            try {
                const urlobj = new URL(`${baseUrl}${linkElement.href}`);
            urls.push(urlobj.href)
            } catch (error) {
                console.log(`error with relative url :  ${error.message}`);
            }
            
        }else{
            //absolute
            try {
                const urlobj = new URL(linkElement.href);
                urls.push(urlobj.href)
            } catch (error) {
                console.log(`error with absolute url :  ${error.message}`);
            }

        }
    }
    return urls;
}


function normalizeUrl(Urlstring) {
    const urlobject = new URL(Urlstring);
    
    const hostpath =  `${urlobject.hostname}${urlobject.pathname}`;
    if (hostpath.length > 0 && hostpath.slice(-1) === '/') {
        return hostpath.slice(0,-1); // this will givce everything except the last character
    }
    return hostpath
} 

module.exports = {
    normalizeUrl,
    getUrlFormHtml,
    crawlPage
} 