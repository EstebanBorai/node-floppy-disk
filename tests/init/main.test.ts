import {sync as rimraf} from 'rimraf';
import {TEST_REPO_PATH} from '../constants';
import main from '../../lib/init/main';

describe('lib/init/main.ts', () => {
	beforeEach(() => {
		rimraf(TEST_REPO_PATH);
	});

	afterAll(() => {
		rimraf(TEST_REPO_PATH);
	});

	it('creates a repo path without initial files', async (done) => {
		expect.assertions(3);

		const {
			directory,
			exists,
			justCreated
		} = await main(TEST_REPO_PATH);

		console.log(directory, exists, justCreated);
		expect(directory).toBe(`${TEST_REPO_PATH}/manifest.json`);
		expect(exists).toBe(true);
		expect(justCreated).toBe(true);
		done();
	});
});
