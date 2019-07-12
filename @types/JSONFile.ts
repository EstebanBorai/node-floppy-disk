/**
 * A JSONFile represents a json file that is created inside the repo file.
 * 
 * If no subDirectory is given to a file creator function when giving a JSONFile,
 * then the json file will be created in the root of the repoPath.
 */
interface JSONFile {
	fileName: string;
	subDirectory?: string;
	contents: object;
}

export default JSONFile;
