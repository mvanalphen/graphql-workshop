# Apollo Server

A simple Apollo Server instance for customers for Jumbo's GraphQL workshops.

## Installation

To install and run the project, follow these steps.

### Node

This project depends on Node and Node Package Manager (NPM). To install Node, it is recommended to use Node Version Manager (NVM):

- [macOS](https://github.com/nvm-sh/nvm)
- [Windows](https://github.com/coreybutler/nvm-windows)

Alternatively, you can [download Node](https://nodejs.org/en) and install it manually.

When using NVM, be sure to set the correct Node version:

```bash
# macOS
nvm use

# Windows
nvm use 20
```

### Dependencies

The next step is to install the project's dependencies using NPM.

```bash
npm install
```

### Rover CLI

To run an instance of Apollo Router and run commands against Apollo GraphOS, the Rover CLI must be installed. Follow [these instructions](https://www.apollographql.com/docs/rover/getting-started/) to install it.

### Running the project for the workshop

To run the project, run `npm run dev`. This will spin up the server on port `4000`. You can access the server through `http://localhost:4000`.

### Running Apollo Router

To run an instance of Apollo Router, run `rover dev --supergraph-port 4500 --supergraph-config ./router/supergraph.yaml --elv2-license=accept`. This will run a local instance of Apollo Router on port `4500` using the local supergraph configuration. You can access the router through `http://localhost:4500`.

## Commands

The following commands are available in this project.

```bash
# Build the project
npm run build

# Run the project in development mode
npm run dev

# Generate the GraphQL types
npm run codegen

# Format the project
npm run format

# Lint the project
npm run lint
```
