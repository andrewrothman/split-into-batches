# Split Into Batches

Splits long arrays into batches of a specified size.

## Example

```
import splitIntoBatches from "split-into-batches";

const longArray = ["a", "b", "c", "d", "e"];
const batches = splitIntoBatches(longArray, 2);

console.log(batches);

// [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e' ] ]
```
