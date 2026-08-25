<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const gw2ApiKey = ref(runtimeConfig.public.gw2ApiKey);
const data = ref();

async function fetchData() {
  const { data: result } = await useFetch(
    'https://api.guildwars2.com/v2/account',
    {
      headers: {
        Authorization: `Bearer ${gw2ApiKey.value}`,
      }
    }
  );

  data.value = result.value;
}
</script>

<template>
  <input v-model="gw2ApiKey" />
  <button @click="fetchData()">fetch</button>

  <pre v-if="data">
    {{ data }}
  </pre>
</template>
