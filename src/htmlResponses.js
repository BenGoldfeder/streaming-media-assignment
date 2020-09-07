const fs = require('fs');
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const index2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const index3 = fs.readFileSync(`${__dirname}/../client/client3.html`);


const getIndex = (request, response, indexNum) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(indexNum);
    response.end();
}

const getPage1 = (request, response) => {
    getIndex(request, response, index);
}
const getPage2 = (request, response) => {
    getIndex(request, response, index2);
}
const getPage3 = (request, response) => {
    getIndex(request, response, index3);
}



module.exports.getPage1 = getPage1;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;