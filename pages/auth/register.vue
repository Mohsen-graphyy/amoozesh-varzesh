<template>
  <div>
    <auth-sign-up v-if="state === 'register'" v-model="state" />
    <auth-otp v-if="state === 'otp'" v-model="state" />
    <auth-set-password v-if="state === 'password'" v-model="state" />
  </div>
</template>
<script setup>
definePageMeta({
  name: "register",
  layout: "auth",
});
const state = ref("register");
</script>
