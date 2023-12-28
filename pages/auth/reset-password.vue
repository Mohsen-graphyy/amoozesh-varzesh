<template>
  <div>
    <auth-sign-up v-if="state === 'register'" is-set-password v-model="state" />
    <auth-otp v-if="state === 'otp'" is-set-password v-model="state" />
    <auth-set-password
      v-if="state === 'password'"
      is-set-password
      v-model="state" />
  </div>
</template>
<script setup>
const state = ref("register");

definePageMeta({
  name: "setPassword",
  layout: "auth",
});
</script>
