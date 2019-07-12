import { promises as fsPromises } from 'fs';
import { isExistent, writeFile } from '../utils';
import { DataTypes } from '../@types';
import { getConfig } from './config';

/**
 * 
 * @param fileName - Name of the file to create
 * @param fileContent - Contents of the file
 * 
 * Creates a new file as a sub directory in the repoPath given on the init, and returns
 * the directory of the created file.
 */
async function newFile(fileName: string, fileContent: DataTypes): Promise<string> {
	const { repoPath } = getConfig();
	const fileFullDir = `${repoPath}/${fileName}`;
	const fileDir = fileFullDir.slice(0, fileFullDir.lastIndexOf('/'));

	return new Promise((resolve, reject): void => {
		isExistent(fileDir).then((filePathExists): void => {
			if (filePathExists) {
				writeFile(fileFullDir, fileContent).then((): void => {
					resolve(fileFullDir);
				}).catch((writeError): void => {
					reject(writeError);
				});
			} else {
				fsPromises.mkdir((fileDir), { recursive: true }).then((): void => {
					fsPromises.open(fileFullDir, 'wx').then((): void => {
						writeFile(fileFullDir, fileContent).then((): void => {
							resolve(fileFullDir);
						}).catch((writeError): void => {
							reject(writeError);
						});
					});
				});
			}
		});
	});
}

export default newFile;
