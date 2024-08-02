import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema } from "@apollo/subgraph";

import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadTypedefs } from "@graphql-tools/load";

import { fileURLToPath } from "url";
import { dirname } from "path";

import resolvers from "./resolvers/index";
import { StoreAPI } from "./data-sources/store-api";

const directory = dirname(fileURLToPath(import.meta.url));

const sources = await loadTypedefs(`${directory}/graphql/**/*.graphql`, {
  loaders: [new GraphQLFileLoader()],
});

const typeDefs = sources.map((source) => source.document!);

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

startStandaloneServer(server, {
  context: async () => ({
    dataSources: {
      storeApi: new StoreAPI(),
    },
  }),
  listen: { port: 4200 },
})
  .then(({ url }) => {
    console.info(`🚀 Server ready at: ${url}`);
    return url;
  })
  .catch((error) => {
    console.error("Error starting Apollo Server", error);
    return null;
  });
