import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fs from "fs";
import fsPromises from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const logEvents = async (message) => {
  const dateTime = format(new Date(), "yy-mm-dd hh:mm:ss");
  const logItem = `${dateTime} | ${uuid()} | ${message}\n`;

  console.log(logItem);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      logItem
    );
  } catch (error) {
    console.error(error);
  }
};

export default logEvents;
