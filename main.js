const { crawlPage } = require('./crawl.js');
const {printReport} = require('./report.js')

async function main() {
    if (process.argv.length < 3) {  // this is to check if the arguments are provided or not
        console.log('no website provided');
        process.exit(1);
    }
    if (process.argv.length > 3 ) { // more than one website can't be provided
        console.log('too many command line args');
        process.exit(1);
    }
    const baseURL = process.argv[2]; // selecting the url from command line
    console.log(`starting crawling of ${baseURL}`);//displaying the url we are actively crawling
    const pages = await crawlPage(baseURL , baseURL , {});
    printReport(pages);
   
}

main()