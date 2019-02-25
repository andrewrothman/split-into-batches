import splitIntoBatches from "../src/index";

const longArray = ["a", "b", "c", "d", "e"];
const batches = splitIntoBatches(longArray, 2);

console.log(batches);
