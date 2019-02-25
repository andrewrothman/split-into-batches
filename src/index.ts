function splitIntoBatches<T>(array: T[], size: number): T[][] {
	if (size <= 0) {
		throw new Error("batch size cannot be <= 0");
	}
	
	const batches = [];
	let currentBatch = [];
	let indexInBatch = 0;
	
	for (let i = 0; i < array.length; i++) {
		if (indexInBatch + 1 > size) {
			batches.push(currentBatch);
			
			currentBatch = [];
			indexInBatch = 0;
		}
		
		currentBatch.push(array[i]);
		indexInBatch++;
	}
	
	batches.push(currentBatch);
	
	return batches;
}

export default splitIntoBatches;
