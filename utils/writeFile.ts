/* eslint-disable @typescript-eslint/no-explicit-any */
import { promises as fsPromises } from 'fs';
import toByteArray from './toByteArray';

function writeFile(filePath: string, data: any): Promise<void> {
	return fsPromises.writeFile(filePath, toByteArray(data));
}

export default writeFile;
