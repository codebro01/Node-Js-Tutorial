const {readFile, writeFile} = require("fs");

writeFile("./text files/myNewFile.txt", "This is the new text file made using writeFile async", (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result)
    const data = result;

    writeFile("./text files/secondNewFile.txt", "This is the second text file made using writeFile async", (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result) 
        const data = result;

        readFile("./text files/file.txt", "utf-8", (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result)
            const data = result;;
        })
    })

})

