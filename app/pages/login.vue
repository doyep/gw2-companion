<script setup lang="ts">
const { fetch: refreshSession } = useUserSession();

const apiKey = ref("");

const { error, status, execute } = await useFetch("/api/auth/login", {
  method: "POST",
  body: () => ({ apiKey: apiKey.value }),
  immediate: false,
})

async function login() {
  await execute();

  if (status.value === 'success') {
    await refreshSession();
    await navigateTo("/");
  }
}
</script>

<template>
  <h1>LOGIN</h1>
  <p>
    <input v-model="apiKey" />
    <button @click="login()" :disabled="status === 'pending'">GO</button>
  </p>
  <NuxtLink to="/">RETURN TO HOME</NuxtLink>
  <p v-if="status === 'error'">
    {{ error?.statusText }}
  </p>
</template>
