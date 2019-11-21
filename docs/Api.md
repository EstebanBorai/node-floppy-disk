# API
- [init](https://github.com/estebanborai/node-floppy-disk/blob/master/docs/Api.md#initrepopath-string-config-initconfig-afterinit-function-promise)

## init
Initializes a new repository.

Signature:
```typescript
init(repoPath: string, config?: InitConfig, afterInit?: Function): Promise<InitResults>
```

Argument | Type | Description
--- | --- | ---
*repoPath* | `string` | Path to the repository directory
*config* (Optional) | [InitConfig]() | Repository configuration
*afterInit* (Optional) | `(initConfig: InitiConfig) => any` | Callback to invoke when the repository is created

Returns:
A `Promise` wrapping the [InitResults]().