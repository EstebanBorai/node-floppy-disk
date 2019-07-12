import { promises as fsPromises, constants as fsConstants } from 'fs';
import { Errors } from '../constants';

async function isExistent(filePath: string): Promise<boolean> {
  return fsPromises.access(filePath, fsConstants.F_OK).then((): boolean => {
    return true;
  }).catch((error): boolean => {
    if (error.code === Errors.FileDoesntExists) {
      return false;
    }

    throw new Error(error);
  });
}

export default isExistent;
