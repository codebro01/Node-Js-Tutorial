//?Modules
//* Common JS, every file is module (by default);
//* modules - Encapsulated code (only share minimum);

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
// console.log(data);
require("./7-mind-grenage")
sayHi("Susan"); 
sayHi(names.john); 
sayHi(names.dami); 
