function printReport(pages){
    console.log("=========");
    console.log("Report");
    console.log("=========");
    const sortedpages = sortpages(pages);
    for(const sortedpage of sortedpages){
        const url = sortedpage[0];
        const hits = sortedpage[1];
        console.log(`Found ${hits} Links to page :- ${url}`);
    }
    console.log("=========");
    console.log("End Report");
    console.log("=========");
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