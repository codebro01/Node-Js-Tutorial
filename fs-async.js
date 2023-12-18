const { readFile, writeFile } = require("fs");

console.log("Starting the read the file")
readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `This is the async test for the new file`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log("Done writing the file")
            }
        )
    })
});
console.log("Starting the next file task")