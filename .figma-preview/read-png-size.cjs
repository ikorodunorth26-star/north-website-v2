const fs = require("fs");
const file = process.argv[2];
const b = fs.readFileSync(file);
console.log(b.readUInt32BE(16), b.readUInt32BE(20), b.length);
