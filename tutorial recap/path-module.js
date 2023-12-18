const path = require("path");

console.log(path.sep);
const secondFilePath = path.join("/tutorial recap", "recap.js");
const filePath = path.join("/tutorial recap", "text files", "file.txt");
console.log(filePath);
const base = path.basename(filePath);
const secondBase = path.basename(secondFilePath)
console.log(base);
console.log(secondBase);
const totalPath = path.resolve(__dirname, "text files", "file.txt");
console.log(totalPath);
