import os from 'os';
import path from 'path';

export const HOME = os.homedir();

export const createHomeDirPath = (dirname: string): string => {
  return path.join(HOME, dirname);
};
