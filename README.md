# TypeScript-Babel-Starter (with purpose-built Webpack config and targeted browser support)

# Why the fork?

This is a proof of concept for an incremental migration strategy from just-a-bunch-of-js-scripts to more modern front-end code. The intention is to allow a collection of existing plain JavaScript files (that are hopefully safe to use on IE11), to gradually be converted to TypeScript.

The build will use Babel to provide polyfills for required browser support. Webpack will be used somewhat unconventionally to bundle each source file in the original directory to a matching JavaScript file, so it will work with no changes to the existing site or active changes to configuration files.

# How do I use it?

## Setup

```sh
yarn
```

## Building the repo

```sh
yarn build
```

Or build without type checks:

```sh
yarn build:js
```

Make the final bundles:

```sh
yarn bundle
```

## Type-checking the repo

```sh
yarn type-check
```

And to run in `--watch` mode:

```sh
yarn type-check:watch
```
