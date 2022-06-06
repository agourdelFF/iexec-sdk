[iexec](../README.md) / [Exports](../modules.md) / IExecAppModule

# Class: IExecAppModule

module exposing app methods

## Hierarchy

- [`IExecModule`](IExecModule.md)

  ↳ **`IExecAppModule`**

## Table of contents

### Constructors

- [constructor](IExecAppModule.md#constructor)

### Properties

- [config](IExecAppModule.md#config)

### Methods

- [countUserApps](IExecAppModule.md#countuserapps)
- [deployApp](IExecAppModule.md#deployapp)
- [showApp](IExecAppModule.md#showapp)
- [showUserApp](IExecAppModule.md#showuserapp)
- [fromConfig](IExecAppModule.md#fromconfig)

## Constructors

### constructor

• **new IExecAppModule**(`configOrArgs`, `options?`)

Create an IExecModule instance using an IExecConfig like

#### Parameters

| Name | Type |
| :------ | :------ |
| `configOrArgs` | [`IExecConfig`](IExecConfig.md) \| [`IExecConfigArgs`](../interfaces/internal_.IExecConfigArgs.md) |
| `options?` | [`IExecConfigOptions`](../interfaces/internal_.IExecConfigOptions.md) |

#### Inherited from

[IExecModule](IExecModule.md).[constructor](IExecModule.md#constructor)

## Properties

### config

• **config**: [`IExecConfig`](IExecConfig.md)

current IExecConfig

#### Inherited from

[IExecModule](IExecModule.md).[config](IExecModule.md#config)

## Methods

### countUserApps

▸ **countUserApps**(`userAddress`): `Promise`<`BN`\>

count the apps owned by an address.

example:
```js
const count = await countUserApps(userAddress);
console.log('app count:', count);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |

#### Returns

`Promise`<`BN`\>

___

### deployApp

▸ **deployApp**(`app`): `Promise`<{ `address`: `string` ; `txHash`: `string`  }\>

**SIGNER REQUIRED**

deploy an app contract on the blockchain

example:
```js
const { address } = await deployApp({
 owner: address,
 name: 'My app',
 type: 'DOCKER',
 multiaddr: 'registry.hub.docker.com/iexechub/vanityeth:1.1.1',
 checksum: '0x00f51494d7a42a3c1c43464d9f09e06b2a99968e3b978f6cd11ab3410b7bcd14',
});
console.log('deployed at', address);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Object` | - |
| `app.checksum` | `string` | app image digest |
| `app.mrenclave?` | `Object` | optional for TEE apps only, specify the TEE protocol to use |
| `app.mrenclave.entrypoint` | `string` | app entrypoint path |
| `app.mrenclave.fingerprint` | `string` | app tee fingerprint |
| `app.mrenclave.heapSize` | `number` | dedicated memory in bytes |
| `app.mrenclave.provider` | `string` | only "SCONE" is supported |
| `app.mrenclave.version` | `string` | provider's protocol version |
| `app.multiaddr` | [`Multiaddress`](../modules/internal_.md#multiaddress) | app image address |
| `app.name` | `string` | a name for the app |
| `app.owner` | `string` | the app owner |
| `app.type` | `string` | only 'DOCKER' is supported |

#### Returns

`Promise`<{ `address`: `string` ; `txHash`: `string`  }\>

___

### showApp

▸ **showApp**(`appAddress`): `Promise`<{ `app`: [`App`](../interfaces/internal_.App.md) ; `objAddress`: `string`  }\>

show a deployed app details

example:
```js
const { app } = await showApp('0xb9b56f1c78f39504263835342e7affe96536d1ea');
console.log('app:', app);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `appAddress` | `string` |

#### Returns

`Promise`<{ `app`: [`App`](../interfaces/internal_.App.md) ; `objAddress`: `string`  }\>

___

### showUserApp

▸ **showUserApp**(`index`, `address`): `Promise`<{ `app`: [`App`](../interfaces/internal_.App.md) ; `objAddress`: `string`  }\>

show deployed app details by index for specified user user

example:
```js
const { app } = await showUserApp(0, userAddress);
console.log('app:', app);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | [`BNish`](../modules/internal_.md#bnish) |
| `address` | `string` |

#### Returns

`Promise`<{ `app`: [`App`](../interfaces/internal_.App.md) ; `objAddress`: `string`  }\>

___

### fromConfig

▸ `Static` **fromConfig**(`config`): [`IExecAppModule`](IExecAppModule.md)

Create an IExecAppModule instance using an IExecConfig instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IExecConfig`](IExecConfig.md) |

#### Returns

[`IExecAppModule`](IExecAppModule.md)

#### Overrides

[IExecModule](IExecModule.md).[fromConfig](IExecModule.md#fromconfig)