import { getConfig } from '../lib/config';

/**
 * 
 * @param filePath - Path of the file inside the FileSystem repo
 * 
 * getInRepoDir creates a in reposiotry path based on parameters given.
 */
function getInRepoDir(inRepoDir: string): string {
	const { repoPath } = getConfig();
	return `${repoPath}/${inRepoDir}`;
};

export default getInRepoDir;
