# API
- [init]()

## init(repoPath: string, config?: InitConfig, afterInit?: Function): Promise<InitResults>
Initializes a new repository.

Argument | Type | Description
--- | --- | ---
*repoPath* | `string` | Path to the repository directory
*config* (Optional) | [InitConfig]() | Repository configuration
*afterInit* (Optional) | `(initConfig: InitiConfig) => any` | Callback to invoke when the repository is created
