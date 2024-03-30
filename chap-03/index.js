import { format } from "date-fns";
import { v4 as uuid } from "uuid";

console.log(format(new Date(), "dd/MM/yy hh:mm:ss"));
console.log(uuid());
