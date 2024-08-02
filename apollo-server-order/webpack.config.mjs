import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import NodeExternals from "webpack-node-externals";

const directory = dirname(fileURLToPath(import.meta.url));

const configuration = {
  devtool: "source-map",
  entry: [`${directory}/src/index.ts`],
  externals: [NodeExternals({})],
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "**/*.graphql", to: "./graphql", context: "./src/graphql" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        exclude: [resolve(`${directory}/node_modules`)],
        loader: "ts-loader",
        options: { configFile: "tsconfig.json" },
        test: /\.ts$/,
      },
    ],
  },
  output: {
    filename: "server.js",
    path: resolve(`${directory}/dist`),
  },
  resolve: {
    extensions: [".ts", ".js", ".mjs", ".cjs"],
  },
  target: "node",
};

export default configuration;
