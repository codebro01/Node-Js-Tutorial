
const os = require("os");
const user = os.userInfo();
const info = {
    "type": os.type(),
    release: os.release(), 
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(info);