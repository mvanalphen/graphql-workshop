<template>
  <div>
    <h1>GraphQL Workshop</h1>
    <p>
      Press F12 to open your developer console. Then open the "Network" tab to
      review your requests. When making changes, don't forget to re-generate the
      types using `npm run codegen`
    </p>

    <button @click="query">Perform Query</button>
    <button @click="mutation">Perform Mutation</button>
  </div>
</template>

<script setup lang="ts">
import {
  useTestQueryOperationQuery,
  useTestMutationOperationMutation,
} from "~/generated/graphql";

useHead({
  title: "GraphQL Workshop",
});

const query = async () => {
  const { onResult } = useTestQueryOperationQuery({
    orderId: "1",
    customerId: "1",
  });

  onResult(({ data }) => {
    console.info(data);
  });
};
const mutation = async () => {
  const { onDone, mutate } = useTestMutationOperationMutation();

  mutate({ input: { deliveryDate: "2024-01-01" } });

  onDone(({ data }) => {
    console.info(data);
  });
};
</script>

<style>
button {
  margin-right: 4px;
}
</style>
