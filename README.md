# node-floppy-disk
💾 Centralized file system management for Node.js

## Motivation
Make use of a layer above NodeJS's `fs` module which makes easier to create, read, delete and update files.
This module is intended to use with :electron: (Electron) applications but its API is isolated from Electron's API.

## Installation
```bash
npm i node-floppy-disk
```

## Getting Started
`node-floppy-disk` is indented to be used with :electron: (Electron) applications, but can be applied in any application that consumes the NodeJS API.

Under the hood `node-floppy-disk` uses `fs` in order to manage filesystem operations.

[Read the API Documentation](https://github.com/estebanborai/node-floppy-disk/blob/master/docs/Api.md#api)

### Creating a Repository
A repository is the name given to a directory where all your application files are stored. You will want to
create a repository to manage your application files.

```typescript
import * as os from 'os';
import { init } from 'node-floppy-disk';

const applicationFiles = `${os.homedir()}/my-app`;
const options = {
	name: 'My New Application',
	initialFiles: [
		{
			fileName: 'settings.json',
			subDirectory?: '',
			contents: {
				username: 'myusername',
				theme: 'dark'
			}
		}
	],
	debug: false
};

init(applicationFiles, options, () => {
	console.log('I just created a new repository!');
});
```

## Contributions
Any contribution to this project is welcome.
Feel free to open an issue or creating a pull request.
