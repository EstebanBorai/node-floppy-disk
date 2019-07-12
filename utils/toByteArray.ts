function toBiteArray(data: string | number | object): Uint8Array {
	try {
		let stringer;

		if (typeof data === 'object') {
			stringer = JSON.stringify(data, null, 2);
		} else {
			stringer = data.toString();
		}

		return new Uint8Array(Buffer.from(stringer));
	} catch (conversionError) {
		throw new Error(`Unable to parse data. ${conversionError}`);
	}
}

export default toBiteArray;
