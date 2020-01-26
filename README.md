# TypeScript-Babel-Starter

# What is this?

This is a small sample repository that uses Babel to transform TypeScript to plain JavaScript, and uses TypeScript for type-checking.
This README will also explain step-by-step how you can set up this repository so you can understand how each component fits together.

For simplicity, we've used `babel-cli` with a bare-bones TypeScript setup, but we'll also demonstrate integration with JSX/React, as well as adding bundlers into the mix.
Specifically, we'll show off integration with Webpack for if you're deploying an application, and Rollup for if you're producing a library.

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
