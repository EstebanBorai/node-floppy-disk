import { promises as fsPromises } from 'fs';
import { setCongfig } from '../config';
import { isExistent, writeFile, createManifest } from '../../utils';
import { InitResults, InitConfig } from '../../@types';
import bulkCreateFiles from '../../utils/bulkCreateFiles';

/**
 * 
 * @param repoPath - Files repository directory
 * @param config - Repository Configuration
 * 
 * Initializes a new repository in the given `repoPath`
 * 
 * @returns Promise wrapping `InitResults`
 * 
 */
async function main(repoPath: string, config?: InitConfig): Promise<InitResults> {
	if (repoPath !== undefined) {
		const HOME = repoPath;
		const manifestPath = `${HOME}/manifest.json`;
		const isDebugging = config && config.debug;
		const repositoryName = (config && config.name) || 'Untitled Repository';

		return new Promise((resolve, reject): void => {
			setCongfig({
				repoPath,
				manifestPath
			}).then((): void | boolean => {
				if (isDebugging) {
					console.log(`Attempt to Check Project Files @: ${HOME}`);
				}

				isExistent(manifestPath).then((isBaseExistent): void => {
					if (isBaseExistent) {
						if (isDebugging) {
							console.log(`Files OK @: ${HOME}`);
						}

						resolve({
							directory: HOME,
							exists: true,
							justCreated: false
						});
					} else {
						if (isDebugging) {
							console.log(`Creating Directory @: ${HOME}`);
						}

						fsPromises.mkdir(HOME, { recursive: true }).then((): void => {
							if (isDebugging) {
								console.log(`Creating Manifest @: ${HOME}/manifest.json`);
							}

							fsPromises.open(manifestPath, 'wx').then((): void => {
								writeFile(manifestPath, createManifest(repositoryName)).then((): void => {
									resolve({
										directory: manifestPath,
										exists: true,
										justCreated: true
									});
								}).catch((writeJSONError): void => {
									reject(writeJSONError);
								});
							}).catch((openDirError): void => {
								reject(openDirError);
							});
							
							// Print each created file to the console on init if current configuration instance is for debugging
							if (isDebugging && (config && config.initialFiles && config.initialFiles.length && config.initialFiles.length > 0)) {
								bulkCreateFiles(config.initialFiles).then((createdFiles): void => {
									createdFiles.forEach((file): void => {
										console.log(`Created file on initialization @ ${file}`);
									});
								});
							}
						});
					}
				});
			});
		});
	} else {
		throw new Error('Missing "repoPath" in initialization.');
	}
}

export default main;
