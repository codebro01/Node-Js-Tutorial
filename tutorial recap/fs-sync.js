const fs = require("fs");
const read = fs.readFileSync("./text files/file.txt", "utf-8");
console.log(read);

fs.writeFileSync("./text files/new-file.txt", `This is a new text file I just created`);
