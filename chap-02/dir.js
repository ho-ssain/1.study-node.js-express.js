const fs = require("fs");

if (!fs.existsSync("./test-dir")) {
  fs.mkdir("./test-dir", (err) => {
    if (err) throw err;
    console.log(`./test-dir is created!`);
  });
} else {
  console.error(`Error: ./test-dir already exists.`);
}

if (fs.existsSync("./test-dir")) {
  fs.rmdir("./test-dir", (err) => {
    if (err) throw err;
    console.log(`./test-dir is removed!`);
  });
} else {
  console.error(`Error: ./test-dir does not exists.`);
}

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});
