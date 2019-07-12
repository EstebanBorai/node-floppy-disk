import writeFile from '../utils/writeFile';
import { getInRepoDir } from '../utils';

type ContentTypes = string | number;

/**
 * 
 * @param filePath - Path of the file inside the repo
 * @param contents - Contents to write to the file
 * 
 * write will write contents to the specified file
 */
function write<T>(filePath: string, contents: ContentTypes | T): Promise<ContentTypes | T> {
	return new Promise((resolve): void => {
		writeFile(getInRepoDir(filePath), contents)
			.then((): void => {
				resolve(contents);
			});
	});
}

export default write;
