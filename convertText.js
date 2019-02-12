const fs = require('fs');

const text = fs.readFileSync('./text.json');

const data = text; 

fs.writeFileSync('text.txt', data)
