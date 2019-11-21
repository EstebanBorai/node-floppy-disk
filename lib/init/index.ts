import main from './main';
import { InitResults, InitConfig } from '../../@types';

/**
 * 
 * @param repoPath - Path to repo directory
 * @param config - Configuration for repostiory
 * @param afterInit - Callback to call after intialization process
 * 
 * Creates a new repository in the given path.
 * 
 */
async function init(repoPath: string, config?: InitConfig, afterInit?: Function): Promise<InitResults> {
	const initResults = await main(repoPath, config);

	if (afterInit) {
		afterInit(initResults);
	}

	return initResults;
}

export default init;
