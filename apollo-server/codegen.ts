import type { CodegenConfig } from "@graphql-codegen/cli";
import type { TypeScriptPluginConfig } from "@graphql-codegen/typescript";
import type { TypeScriptResolversPluginConfig } from "@graphql-codegen/typescript-resolvers";

const typeScriptPluginConfig: TypeScriptPluginConfig = {
  declarationKind: {
    type: "class",
  },
};

const resolverPluginConfig: TypeScriptResolversPluginConfig = {
  contextType: "../models/context#Context",
  federation: true,
  namingConvention: {
    enumValues: "keep",
  },
  makeResolverTypeCallable: true,
  noSchemaStitching: true,
  optionalInfoArgument: true,
  skipTypename: true,
  useIndexSignature: true,
  mappers: {
    Order: "../models/order-entity-representation#OrderEntityRepresentation",
  },
};

const config: CodegenConfig = {
  documents: undefined,
  generates: {
    "src/generated/graphql.ts": {
      config: {
        ...typeScriptPluginConfig,
        ...resolverPluginConfig,
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  overwrite: true,
  schema: "src/graphql/**/*.graphql",
  hooks: {
    afterAllFileWrite: [
      "npm run format -- -w",
      "npm run lint -- --fix || true",
    ],
  },
};

export default config;
