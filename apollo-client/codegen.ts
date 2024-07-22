import path from "path";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  config: {
    namingConvention: {
      enumValues: "keep",
    },
  },
  documents: [path.resolve(__dirname, "./src/graphql/**/*.graphql")],
  generates: {
    "./src/generated/graphql.ts": {
      config: {
        useTypeImports: true,
        vueCompositionApiImportFrom: "vue",
      },
      plugins: ["typescript", "typescript-operations", "typescript-vue-apollo"],
    },
  },
  hooks: {
    afterAllFileWrite: [
      "npm run lint -- --fix || true",
      "npm run format -- -w",
    ],
  },
  schema: "http://localhost:4000",
};

export default config;
