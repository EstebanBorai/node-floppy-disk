import main from './main';
import { InitResults, InitConfig } from '../../@types';

function init(repoPath: string, config?: InitConfig, afterInit?: Function): Promise<InitResults> {
	return main(repoPath, config).then((initResults): InitResults => {
		if (afterInit) {
			afterInit(initResults);
		}

		return initResults;
	});
}

export default init;
