function printReport(pages){
    console.log("=========");
    console.log("Report");
    console.log("=========");
    const sortedpages = sortpages(pages);
    let totalredirect = 0;
    for(const sortedpage of sortedpages){
        const url = sortedpage[0];
        const hits = sortedpage[1];
        console.log(`Found ${hits} Links to page :- ${url}`);
        totalredirect += hits;
    }
    console.log("=========");
    console.log("End Report");
    console.log("=========");
    console.log(`unique pages :${sortedpages.length}`);
    console.log(`total links :- ${totalredirect}`)

}


function sortpages(pages) {
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a,b) =>{
        ahits = a[1]
        bhits = b[1]
        return b[1] - a[1]
    })
    return pagesArr
}

module.exports = {
    sortpages,
    printReport
}