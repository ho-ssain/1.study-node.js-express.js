import logEvents from "./logEvents.js";
import EventEmitter from "events";

// Create a new event emitter object
const myEmitter = new EventEmitter();

// add listen for  the log event
myEmitter.on("log", (message) => logEvents(message));

setTimeout(() => {
  // Emit event
  myEmitter.emit("log", "Log event emitted!!🎉🎉");
}, 2000);
