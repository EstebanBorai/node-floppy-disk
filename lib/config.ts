import { WritterConfiguration } from '../@types';

const key = '__electron_files_writter__config__obj';

export function setCongfig(settings: WritterConfiguration): Promise<WritterConfiguration> {
  return new Promise((resolve, reject): void => {
    try {
      global[key] = settings;
  
      resolve(settings);
    } catch (error) {
      reject(error);
    }
  });
}

export const getConfig = (): WritterConfiguration => {
  if (global[key] !== undefined) {
    return global[key];
  } else {
    throw new Error('No configuration set. You should initialize the Writter in order to gather configuration later.');
  }
}

export const newFileName = (fileName: string): string => `${global[key].repoPath}/${fileName}`;
