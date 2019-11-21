import JSONFile from './JSONFile';

interface InitConfig {
	name?: string;
	initialFiles: JSONFile[];
	debug?: boolean;
}

export default InitConfig;
