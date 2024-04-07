function normalizeUrl(Urlstring) {
    const urlobject = new URL(Urlstring);
    
    const hostpath =  `${urlobject.hostname}${urlobject.pathname}`;
    if (hostpath.length > 0 && hostpath.slice(-1) === '/') {
        return hostpath.slice(0,-1); // this will givce everything except the last character
    }
    return hostpath
} 

module.exports = {
    normalizeUrl
} 