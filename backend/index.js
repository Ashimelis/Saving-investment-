


const fs = require('fs')
fs.readFile('./backend/file1.txt', (err, data) => {
if (err) throw err;
console.log(data.toString());
})



