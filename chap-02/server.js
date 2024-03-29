const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log("🚀 ~ fileOps ~ data:", data);

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "reply.txt"),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\nHello, My Self John?"
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "reply.txt"),
      path.join(__dirname, "files", "new-reply.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "new-reply.txt"),
      "utf8"
    );

    console.log("🚀 ~ fileOps ~ newData:", newData);
  } catch (error) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Hi, I am Hasan, Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete!");

//     fs.appendFile(
//       path.join(__dirname, "files", "lorem.txt"),
//       "\nOh, me too!",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete!");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "new_reply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete!");
//           }
//         );
//       }
//     );
//   }
// );

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});
