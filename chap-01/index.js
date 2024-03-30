// Node.js is a js runtime environment where we can run our js code (outside browser), built on chrome v8 js engine
// so now js can be used in server side also because node.js can run on the server

// How Node.js differs from Vanilla js
// (1) node runs on a server - not in a browser (backend not frontend)
// (2) the console is the terminal window
// console.log("Hi, Node!");
// (3) global object instead of window object
// console.log(global);
// (4) has Common core modules  like fs for file system and http for making requests to servers
// (4) to import this modules we use CommonJS module system
// (5) Missing some JS APIs like fetch
const os = require("os");
const path = require("path");
const math = require("./math");
const { modulo } = require("./math");

//..........................................
//------------------------------------------

// console.log("🚀 ~ os:", os);
// console.log(`Hostname: ${os.hostname()}`);
// console.log(`Platform: ${os.platform()} / Arch: ${os.arch()}`);
// console.log(`Uptime: ${Math.floor(os.uptime())} seconds`);

console.log(__dirname); // it gives the directory name of the current script being executed.
console.log(__filename); // It gives the filename of the current script being executed.

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

console.log(math.add(12, 23));
console.log(math.subtract(12, 23));
console.log(math.division(12, 23));
console.log(math.multiply(12, 23));
console.log(modulo(5, 3));
