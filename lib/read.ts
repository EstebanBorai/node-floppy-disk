import { promises as fsPromises } from 'fs';
import { getConfig } from './config';

async function read(inRepoDir: string): Promise<string> {
	const { repoPath } = getConfig();
	const readFilePath = `${repoPath}/${inRepoDir}`;

	return fsPromises.readFile(readFilePath, 'utf-8').then((contents): string => {
		return contents;
	});
}

export default read;
