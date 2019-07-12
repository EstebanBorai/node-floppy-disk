import { Manifest } from '../@types';

const createManifest = (application: string): Manifest => ({
  application,
  dateInitialized: new Date().toISOString()
});

export default createManifest;
