const fs = require('fs');

const stream = fs.createReadStream('text.txt', 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log(data));