<script setup lang="ts">
import type { AccountDto } from '#shared/types/gw2';

const { clear: clearSession } = useUserSession();

async function logout() {
  await clearSession();
  await navigateTo("/login");
}

const { data: account } = await useFetch<AccountDto>("/api/account");
</script>

<template>
  <h1>INDEX</h1>
  <p>
    <button @click="logout()">LOGOUT</button>
  </p>
  <pre>
    {{ account }}
  </pre>
</template>
