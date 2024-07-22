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
useHead({
  title: "GraphQL Workshop",
});

const query = async () => {
  console.warn("TODO");
};
const mutation = async () => {
  console.warn("TODO");
};
</script>

<style>
button {
  margin-right: 4px;
}
</style>
