/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSONFile } from '../@types';
import { newFile } from '../lib';

const createJSONFile = (file: JSONFile): Promise<string> => {
	let fullPath;

	if (file.subDirectory !== undefined) {
		fullPath = `${file.subDirectory}/${file.fileName}`;
	} else {
		fullPath = file.fileName;
	}

	if (fullPath.indexOf('.json') === -1) {
		fullPath = `${fullPath}.json`;
	}

	return newFile(fullPath, file.contents)
		.then((createdFileDir): string => {
			return createdFileDir;
		});
}

function bulkCreateFiles(files: JSONFile[]): Promise<string[]> {
	const filesToCreate = files.map((file): Promise<string> => {
		return createJSONFile(file);
	});

	return Promise.all(filesToCreate)
		.then((createdPaths): string[] => {
			return createdPaths;
		});
}

export default bulkCreateFiles;
