<template>
  <section class="flex h-screen justify-center items-center bg-beta-gray-50">
    <div class="flex flex-col bg-white rounded-xl p-5 auth-box-shadow">
      <base-logo title-classes="ml-10 font-bold" />
      <nuxt-link :to="{ name: 'home' }">bro home</nuxt-link>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  name: "login",
  layout: false,
});
</script>
<style scoped>
.auth-box-shadow {
  box-shadow: 0px 0px 40px -12px rgba(71, 85, 105, 0.13);
}
</style>
