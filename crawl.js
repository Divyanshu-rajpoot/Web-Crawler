const { JSDOM } = require('jsdom');

async function crawlPage( baseURL , currentURL , pages) { // crawling the page
    const baseURLobj = new URL(baseURL);
    const currentURLobj = new URL(currentURL);
    if(baseURLobj.hostname !== currentURLobj.hostname){ // check if we are on the same page or not
        return pages
    }

    const normalizedcurrenturl = normalizeUrl(currentURL);
    if (pages[normalizedcurrenturl] > 0) {
        pages[normalizedcurrenturl]++;
        return pages
    }

    pages[normalizedcurrenturl] = 1;

    console.log(`actively crawling: ${currentURL}`);

    try {
        const resp = await fetch(currentURL);

        if (resp.status > 399) {
            console.log(`error in fetch with status code ${resp.status} on page ${currentURL}`);
            return pages;
        }
        const contenttype = resp.headers.get("content-type") //checks the content type of headers
        if (!contenttype.includes("text/html")) {
            console.log(`non html response content type: ${contenttype} on page: ${currentURL} `);
            return pages;
        }
        const htmlbody = await resp.text();

        const nextUrls = getUrlFormHtml(htmlbody , baseURL);

        for(const nexturl of nextUrls){
            pages = await crawlPage(baseURL , nexturl , pages) //recursively search all the pages for links
        }
        


    } catch (error) {
        console.log(`error in fetch: ${error.message} , on page : ${currentURL}`);
    }
    return pages;
    
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