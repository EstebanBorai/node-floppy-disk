import { promises as fsPromises, Dirent } from 'fs';
import { getConfig } from './config';
import { LSOptions, LSFile } from '../@types';
import { Errors } from '../constants';

type LSResults = (LSFile | string)[];

async function ls(inRepoDir: string, options: LSOptions): Promise<LSResults | void> {
	const { repoPath } = getConfig();
	const lsPath = `${repoPath}/${inRepoDir}`;

	const fileRow = (file: Dirent): LSFile | string => {
		if (options.fileNamesOnly) {
			if (file.isFile()) {
				return file.name;
			}
		} else {
			return {
				fileName: file.name
			}
		}
	}

	return fsPromises.readdir(lsPath, {
		withFileTypes: true
	}).then((filesInPath: Dirent[]): LSResults => {
		return filesInPath.map(fileRow);
	}).catch((error): void => {
		if (error.code === Errors.FileDoesntExists) {
			console.error(`${lsPath} doesn't exists.`);
		} else {
			throw error;
		}
	});
}

export default ls;
