# @mskelton/semantic-release-config

[![npm version](https://img.shields.io/npm/v/@mskelton/semantic-release-config/next.svg)](https://www.npmjs.com/package/@mskelton/semantic-release-config/g)

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)

## Installation

**npm**

```bash
npm install -D semantic-release @mskelton/semantic-release-config
```

**yarn**

```bash
yarn add -D semantic-release @mskelton/semantic-release-config
```

**pnpm**

```bash
pnpm add -D semantic-release @mskelton/semantic-release-config
```

**bun**

```bash
bun add -d semantic-release @mskelton/semantic-release-config
```

## Usage

The shareable config can be configured in the [semantic-release configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@mskelton/semantic-release-config"
}
```
